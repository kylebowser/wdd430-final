import postgres from 'postgres';
import {
  Product,
} from './definitions';
//import { formatCurrency } from './utils';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProducts() {
  try {

    const data = await sql<Product[]>`SELECT * FROM product`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product data.');
  }
}