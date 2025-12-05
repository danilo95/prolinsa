export default function SobreNosotrosPage() {
  return (
    <main className='bg-white'>
      <section className='mx-auto max-w-5xl px-4 py-16 md:py-20'>
        <div className='grid gap-12 md:grid-cols-2 md:gap-16'>
          <div className='text-center'>
            <div className='mb-4 flex justify-center'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600'>
                <span className='text-2xl' aria-hidden>
                  ☕
                </span>
              </div>
            </div>
            <h2 className='mb-4 text-2xl font-bold text-blue-600'>Misión</h2>
            <p className='text-sm leading-relaxed text-slate-700 md:text-base'>
              Somos una empresa dedicada a la importación y distribución de
              productos varios, contamos con más de 10 años de experiencia en
              los mercados salvadoreños atendiendo en los canales de Mayoreo,
              super independiente, supermercados, minoreo, ruteo indirecto,
              institucional y emprendedurismo off-line y online.
            </p>
          </div>

          <div className='text-center'>
            <div className='mb-4 flex justify-center'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600'>
                <span className='text-2xl' aria-hidden>
                  👁️
                </span>
              </div>
            </div>
            <h2 className='mb-4 text-2xl font-bold text-blue-600'>Visión</h2>
            <p className='text-sm leading-relaxed text-slate-700 md:text-base'>
              Ser una empresa líder en la Distribución de productos diversos a
              nivel regional, a través de nuestras marcas, servicio, calidad e
              innovación, para lograr relaciones comerciales sólidas y duraderas
              con nuestros clientes y por medio de la distribución masiva,
              generar amplias oportunidades de trabajo, crecimiento y desarrollo
              a las personas.
            </p>
          </div>
        </div>

        <div className='mt-16 text-center md:mt-20'>
          <div className='mb-4 flex justify-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600'>
              <span className='text-2xl' aria-hidden>
                ⭐
              </span>
            </div>
          </div>
          <h2 className='mb-4 text-2xl font-bold text-blue-600'>Valores</h2>
          <p className='mx-auto max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base'>
            Integridad y transparencia, Compañerismo, Compromiso, Innovación,
            Trabajo en equipo, Servicio al cliente, Comunicación asertiva.
          </p>
        </div>
      </section>
    </main>
  );
}
