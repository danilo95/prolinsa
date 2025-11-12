import Link from 'next/link';

import { type Aplicacion } from '../../../../lib/types';
import { LIST_APLICACIONES } from '../../../../lib/queries';
import { sanity } from '../../../../lib/sanity';

export const revalidate = 60; // ISR: refresca cada 60s

async function getAplicaciones(): Promise<
  Pick<Aplicacion, 'id' | 'titulo' | 'slug'>[]
> {
  return sanity.fetch(LIST_APLICACIONES);
}

export default async function AplicacionesPage() {
  const data = await getAplicaciones();

  return (
    <main className='max-w-4xl mx-auto p-6 space-y-6'>
      <h1 className='text-2xl font-semibold'>Aplicaciones</h1>

      {data.length === 0 ? (
        <p>No hay aplicaciones todavía.</p>
      ) : (
        <ul className='space-y-3'>
          {data.map((item) => {
            const href = `/aplicaciones/${item.slug || item.id}`;
            return (
              <li
                key={item.id}
                className='flex items-center justify-between rounded-lg border p-4'
              >
                <span className='font-medium'>{item.titulo}</span>
                <Link
                  href={href}
                  className='inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50'
                >
                  Ver
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
