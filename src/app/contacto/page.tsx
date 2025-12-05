import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
                
                <a href="https://www.instagram.com/prodelinsasv?igsh=MTZscXo4bnZsNTVtYQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold">
                  <FaInstagram size={35} />
                </a>

                <a
                  href="https://wa.me/50312345678" // reemplaza con tu número
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  <FaWhatsapp size={35} />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
