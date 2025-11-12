export const runtime = 'nodejs';
export const revalidate = 30;

import type { Product } from '../../../../lib/types';
import { sanity } from '../../../../lib/sanity';

// Variante A: pedir la URL directa del asset
const query = `
  *[_type == "product"] | order(name asc) {
    _id,
    name,
    description,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

async function getProducts(): Promise<Product[]> {
  const docs = await sanity.fetch<any[]>(query);
  return docs.map((doc) => ({
    id: doc._id,
    name: doc.name,
    description: doc.description || '',
    imageUrl: doc.imageUrl || undefined,
    slug: doc.slug || undefined,
  }));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className='mx-auto max-w-5xl px-6 py-10'>
      <h1 className='text-3xl font-bold mb-6'>Catálogo</h1>
      {products.length === 0 && <p>No hay productos aún.</p>}

      <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((p) => (
          <li key={p.id} className='rounded-xl border p-4'>
            {p.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.imageUrl}
                alt={p.name}
                className='mb-3 h-48 w-full object-cover rounded-lg'
              />
            )}
            <h2 className='text-xl font-semibold'>{p.name}</h2>
            {p.description && (
              <p className='text-sm text-gray-600 mt-2'>{p.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
