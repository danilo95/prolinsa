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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-blue-600 mb-4 text-4xl font-bold'>
            Aplicaciones
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Explora nuestras plazas disponibles y unete a nuestro equipo.
          </p>
        </div>

        {/* Lista de Aplicaciones */}
        {data.length === 0 ? (
          <p className='text-center text-gray-600'>
            No hay aplicaciones todavía.
          </p>
        ) : (
          <div className='space-y-6 flex flex-col items-center'>
            {data.map((item) => {
              const href = `/aplicaciones/${item.slug || item.id}`;

              return (
                <div
                  key={item.id}
                  className='w-full lg:w-[80%] p-8 bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 rounded-lg'
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <h2 className='text-blue-600 text-xl font-semibold'>
                        {item.titulo}
                      </h2>
                      <p className='text-gray-600 mt-1'>
                        Aplicación disponible para consulta y uso interno.
                      </p>
                    </div>

                    <Link
                      href={href}
                      className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md text-sm font-medium'
                    >
                      Ver
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className='mt-16 text-center'>
          <p className='text-gray-600'>
            Más aplicaciones estarán disponibles pronto. ¡Mantente atento!
          </p>
        </div>
      </div>
    </div>
  );
}
