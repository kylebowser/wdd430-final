'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
//import { signIn } from '@/auth';
//import { AuthError } from 'next-auth';



const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    message: 'Please enter a name.',
  }),
  price: z.coerce
    .number()
    .gt(0, { message: 'Please enter a price greater than $0.' }),
  category: z.enum(['painting', 'pottery', 'sewing', 'quilting', 'knitting'], {
    message: 'Please select a category.',
  }),
    seller: z.string({
    message: 'Please enter a seller name.',
  }),
    description: z.string({
    message: 'Please enter a description.',
  }),
});

export type State = {
  errors?: {
    name?: string[];
    price?: string[];
    description?: string[];
    category?: string[];
    seller?: string[];
  };
  message?: string | null;
};
 
const CreateInvoice = FormSchema.omit({ id: true });
 
export async function createProduct(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    name: formData.get('name'),
    price: formData.get('price'),
    description: formData.get('description'),
    category: formData.get('category'),
    seller: formData.get('seller'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }

  const { name, price, description, category, seller } = validatedFields.data;
  const amountInCents = price * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (name, price, description, category, seller)
      VALUES (${name}, ${amountInCents}, ${description}, ${category}, ${seller})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/create');
  redirect('/create');
}