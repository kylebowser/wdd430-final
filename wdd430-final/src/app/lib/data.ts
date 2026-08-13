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

export async function fetchFilteredProducts(
  query?: string
) {

  try {
    const products = await sql<Product[]>`
      SELECT
        product.id,
        product.name,
        product.description,
        product.price,
        product.category,
        product.seller
      FROM product
      WHERE
        product.name ILIKE ${`%${query}%`} OR
        product.description ILIKE ${`%${query}%`} OR
        product.price::text ILIKE ${`%${query}%`} OR
        product.category::text ILIKE ${`%${query}%`} OR
        product.seller ILIKE ${`%${query}%`}
      ORDER BY product.name ASC
    `;

    return products;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered product data.');
  }
}