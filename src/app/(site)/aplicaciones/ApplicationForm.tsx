'use client';

import { useState, type FormEvent } from 'react';

interface ApplicationFormProps {
  jobTitle: string;
}

export function ApplicationForm({ jobTitle }: ApplicationFormProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setOpen(false);
  };

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
      >
        Aplica ya
      </button>

      {open && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
          <div className='relative w-full max-w-3xl mx-4 rounded-2xl bg-white shadow-2xl overflow-hidden'>
            <div className='flex items-start justify-between border-b px-6 py-4 bg-gradient-to-r from-blue-50 to-white'>
              <div>
                <p className='text-[11px] uppercase tracking-wide text-blue-600 font-semibold'>
                  Aplicación
                </p>
                <h2 className='mt-1 text-lg font-semibold text-gray-900'>
                  Postular a: <span className='text-blue-700'>{jobTitle}</span>
                </h2>
                <p className='mt-1 text-xs text-gray-500'>
                  Completa tus datos y adjunta tu CV en formato PDF.
                </p>
              </div>

              <button
                type='button'
                onClick={() => setOpen(false)}
                className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                aria-label='Cerrar'
              >
                <span className='sr-only'>Cerrar</span>×
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className='px-6 py-5 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]'
            >
              <div className='space-y-4 text-sm text-gray-700'>
                <p className='font-medium text-gray-900'>
                  Queremos conocerte mejor.
                </p>
                <p className='leading-relaxed'>
                  Déjanos tus datos de contacto y una breve descripción de tu
                  experiencia. Nuestro equipo de Recursos Humanos revisará tu
                  información y se pondrá en contacto contigo si avanzas al
                  siguiente paso del proceso.
                </p>
                <ul className='list-disc list-inside space-y-1 text-xs text-gray-600'>
                  <li>Verifica tu correo electrónico y número de teléfono.</li>
                  <li>
                    Adjunta tu CV en PDF (peso máximo recomendado 5&nbsp;MB).
                  </li>
                  <li>
                    En el mensaje, puedes contarnos por qué te interesa este
                    puesto y tu disponibilidad.
                  </li>
                </ul>
              </div>

              <div className='space-y-4'>
                <div className='space-y-1'>
                  <label
                    htmlFor='nombre'
                    className='block text-xs font-medium text-gray-700'
                  >
                    Nombre completo
                  </label>
                  <input
                    id='nombre'
                    name='nombre'
                    required
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
                    placeholder='Escribe tu nombre completo'
                  />
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='email'
                    className='block text-xs font-medium text-gray-700'
                  >
                    Correo electrónico
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
                    placeholder='ejemplo@correo.com'
                  />
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='telefono'
                    className='block text-xs font-medium text-gray-700'
                  >
                    Teléfono
                  </label>
                  <input
                    id='telefono'
                    name='telefono'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
                    placeholder='+503 0000-0000'
                  />
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='cv'
                    className='block text-xs font-medium text-gray-700'
                  >
                    CV en PDF
                  </label>
                  <input
                    id='cv'
                    name='cv'
                    type='file'
                    accept='application/pdf'
                    className='block w-full text-xs text-gray-600 file:mr-3 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-blue-700 hover:file:bg-blue-100'
                  />
                  <p className='mt-1 text-[11px] text-gray-500'>
                    Formato permitido: PDF.
                  </p>
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='mensaje'
                    className='block text-xs font-medium text-gray-700'
                  >
                    Mensaje / Presentación
                  </label>
                  <textarea
                    id='mensaje'
                    name='mensaje'
                    rows={3}
                    className='w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
                    placeholder='Cuéntanos brevemente sobre tu experiencia y por qué te interesa este puesto.'
                  />
                </div>
              </div>

              <div className='md:col-span-2 flex flex-col gap-3 border-t border-gray-100 pt-4 mt-2 sm:flex-row sm:items-center sm:justify-between'>
                <p className='text-[11px] text-gray-500 max-w-sm'>
                  Tu información será tratada de forma confidencial y utilizada
                  únicamente para fines de reclutamiento.
                </p>

                <div className='flex gap-2 justify-end'>
                  <button
                    type='button'
                    onClick={() => setOpen(false)}
                    className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                  >
                    Cancelar
                  </button>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                  >
                    Enviar postulación
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
