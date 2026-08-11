// 'use server';

// import postgres from 'postgres';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// export async function createInvoice(form: InvoiceForm) {
//   await sql`
//     INSERT INTO invoices (customer_id, amount)
//     VALUES (${form.customerId}, ${form.amount})
//   `;
// }