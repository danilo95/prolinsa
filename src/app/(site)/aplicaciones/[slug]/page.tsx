import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanity } from '../../../../../lib/sanity';
import { type Aplicacion } from '../../../../../lib/types';
import {
  GET_APLICACION_BY_SLUG_OR_ID,
  LIST_SLUGS_AND_IDS,
} from '../../../../../lib/queries';
import { ApplicationForm } from '../ApplicationForm';

export const revalidate = 60;

async function getAplicacion(slugOrId: string): Promise<Aplicacion | null> {
  const value = decodeURIComponent(slugOrId);

  return sanity.fetch(GET_APLICACION_BY_SLUG_OR_ID, { slugOrId: value });
}

export default async function AplicacionDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; //cosa de next 14
  const app = await getAplicacion(slug);

  if (!app) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white py-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-blue-600 text-3xl font-bold mb-2'>
              {app.titulo}
            </h1>
            <p className='text-gray-600 text-sm'>
              Detalle de la aplicación seleccionada.
            </p>
          </div>

          <Link
            href='/aplicaciones'
            className='text-sm text-blue-600 hover:text-blue-700 hover:underline underline-offset-4'
          >
            ← Volver al listado
          </Link>
        </div>

        <div className='bg-white rounded-xl shadow-lg p-8 space-y-8 border-l-4 border-blue-500'>
          {app.descripcion && (
            <section>
              <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                Descripción
              </h2>
              <p className='text-sm leading-6 text-gray-700 whitespace-pre-wrap'>
                {app.descripcion}
              </p>
            </section>
          )}

          {app.requisitos && (
            <section>
              <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                Requisitos
              </h2>
              <p className='text-sm leading-6 text-gray-700 whitespace-pre-wrap'>
                {app.requisitos}
              </p>
            </section>
          )}

          <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='rounded-lg border bg-gray-50 p-4'>
              <div className='text-xs text-gray-500 uppercase tracking-wide'>
                Sexo
              </div>
              <div className='font-medium text-gray-800 mt-1'>
                {app.sexo ?? 'Indiferente'}
              </div>
            </div>
            <div className='rounded-lg border bg-gray-50 p-4'>
              <div className='text-xs text-gray-500 uppercase tracking-wide'>
                Edad
              </div>
              <div className='font-medium text-gray-800 mt-1'>
                {app.edad ?? 'Indiferente'}
              </div>
            </div>
          </section>

          {app.notas && (
            <section>
              <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                Notas
              </h2>
              <p className='text-sm leading-6 text-gray-700 whitespace-pre-wrap'>
                {app.notas}
              </p>
            </section>
          )}

          <section>
            <h2 className='text-lg font-semibold text-gray-800 mb-3'>
              Documento
            </h2>
            {app.pdfUrl ? (
              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <a
                  href={app.pdfUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-medium transition-colors'
                >
                  Ver / Descargar PDF
                </a>
                <span className='text-xs text-gray-500 break-all'>
                  {app.pdfUrl}
                </span>
              </div>
            ) : (
              <p className='text-sm text-gray-600'>No se ha adjuntado PDF.</p>
            )}
          </section>
          <section className='pt-4 border-t mt-4 flex justify-end'>
            <ApplicationForm jobTitle={app.titulo} />
          </section>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const docs: { slug?: string | null; _id: string }[] =
    await sanity.fetch(/* groq */ `
    *[_type == "aplicacion"]{ "slug": slug.current, "_id": _id }
  `);

  return docs.map((d) => ({ slug: d.slug || d._id }));
}
