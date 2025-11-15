import Image from 'next/image';
import Link from 'next/link';

export default function ContactoPage() {
  return (
    <main className='bg-white'>
      <section className='mx-auto max-w-6xl px-4 py-16 md:py-20'>
        <div className='grid gap-10 md:grid-cols-2 md:gap-16 items-center'>
          <div className='relative h-80 w-full md:h-[420px]'>
            <Image
              src='/contacto-cereal.png'
              alt='Prodelinsa cereal'
              fill
              className='object-cover rounded-3xl'
            />
          </div>

          <div className='space-y-10'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-semibold text-slate-900 md:text-4xl'>
                Contáctanos.
              </h1>

              <div className='space-y-3 text-sm md:text-base text-slate-700'>
                <div className='flex items-start gap-3'>
                  <span className='mt-0.5 text-lg'>📱</span>
                  <p>+ (503) 7802 2593</p>
                </div>

                <div className='flex items-start gap-3'>
                  <span className='mt-0.5 text-lg'>✉️</span>
                  <div className='space-y-1'>
                    <p>comunicaciones.prodelinsa.sv@gmail.com</p>
                    <p>rehu.prodelinsa@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <span className='mt-0.5 text-lg'>📍</span>
                  <p>
                    Calle Gabriela Mistral, Urb. Buenos Aires, #199, San
                    Salvador, El Salvador.
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold text-blue-600'>Síguenos</h2>

              <div className='flex items-center gap-4 text-3xl'>
                <Link href='https://facebook.com' aria-label='Facebook'>
                  <span>facebook</span>
                </Link>
                <Link href='https://instagram.com' aria-label='Instagram'>
                  <span>instagram</span>
                </Link>
                <Link href='https://youtube.com' aria-label='YouTube'>
                  <span>youtube</span>
                </Link>
                <Link href='https://wa.me/50378022593' aria-label='WhatsApp'>
                  <span>wa</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
