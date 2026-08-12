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
        category={product.category}
        description={product.description}
        seller={product.seller}


      />
    ))}
    </>
  );
}

export async function Card
({
  title,
  value,
  category,
  description,
  seller,
}: {
  title: string;
  value: number;
  category: string;
  description: string;
  seller: string;
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
           <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {category}
      </p>
           <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {description}
      </p>
           <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {seller}
      </p>
    </div>
  );
}