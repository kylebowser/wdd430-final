import { lusitana } from '@/app/ui/fonts';
import {fetchProducts} from '@/app/lib/data';

export default async function CardWrapper() {
  const products = await fetchProducts();

  return (
    <>
    {products.map((product) => (
      <Card
        key={product.id}
        title={product.name}
        value={product.price}
        type="products"
      />
    ))}
    </>
  );
}

export async function Card
({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'products';
}) 
{
  // const Icon = iconMap[type];
  const products = await fetchProducts();

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}