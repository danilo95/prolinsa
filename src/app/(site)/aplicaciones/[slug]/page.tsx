import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanity } from '../../../../../lib/sanity';
import { type Aplicacion } from '../../../../../lib/types';
import {
  GET_APLICACION_BY_SLUG_OR_ID,
  LIST_SLUGS_AND_IDS,
} from '../../../../../lib/queries';

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
    <main className='max-w-3xl mx-auto p-6 space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>{app.titulo}</h1>
        <Link
          href='/aplicaciones'
          className='text-sm underline underline-offset-4'
        >
          ← Volver al listado
        </Link>
      </div>

      {app.descripcion && (
        <section>
          <h2 className='text-lg font-medium mb-1'>Descripción</h2>
          <p className='text-sm leading-6 whitespace-pre-wrap'>
            {app.descripcion}
          </p>
        </section>
      )}

      {app.requisitos && (
        <section>
          <h2 className='text-lg font-medium mb-1'>Requisitos</h2>
          <p className='text-sm leading-6 whitespace-pre-wrap'>
            {app.requisitos}
          </p>
        </section>
      )}

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='rounded-lg border p-4'>
          <div className='text-xs text-gray-500'>Sexo</div>
          <div className='font-medium'>{app.sexo ?? 'indiferente'}</div>
        </div>
        <div className='rounded-lg border p-4'>
          <div className='text-xs text-gray-500'>Edad</div>
          <div className='font-medium'>{app.edad ?? 'indiferente'}</div>
        </div>
      </section>

      {app.notas && (
        <section>
          <h2 className='text-lg font-medium mb-1'>Notas</h2>
          <p className='text-sm leading-6 whitespace-pre-wrap'>{app.notas}</p>
        </section>
      )}

      <section>
        <h2 className='text-lg font-medium mb-2'>Documento</h2>
        {app.pdfUrl ? (
          <div className='flex items-center gap-3'>
            <a
              href={app.pdfUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50'
            >
              Ver/Descargar PDF
            </a>
            <span className='text-xs text-gray-500 break-all'>
              {app.pdfUrl}
            </span>
          </div>
        ) : (
          <p className='text-sm text-gray-600'>No se ha adjuntado PDF.</p>
        )}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const docs: { slug?: string | null; _id: string }[] =
    await sanity.fetch(/* groq */ `
    *[_type == "aplicacion"]{ "slug": slug.current, "_id": _id }
  `);

  return docs.map((d) => ({ slug: d.slug || d._id }));
}
