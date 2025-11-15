import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import './globals.css';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className='bg-white text-slate-900'>
        <header className='sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm'>
          <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4'>
            <div className='flex items-center gap-3'>
              <Link href='/' className='font-semibold hover:text-lime-700'>
                <Image
                  src='/logo-prodelinsa.jpg'
                  alt='Prodelinsa'
                  width={48}
                  height={48}
                  className='h-10 w-10 object-contain'
                />
              </Link>
            </div>

            <nav className='flex items-center gap-5 text-sm md:text-base'>
              <Link href='/about' className='hover:text-lime-700'>
                Prodelinsa
              </Link>
              <Link href='/aplicaciones' className='hover:text-lime-700'>
                Trabajo
              </Link>

              <Link href='/products' className='hover:text-lime-700'>
                Productos
              </Link>

              <Link href='/catalogo' className='hover:text-lime-700'>
                Catálogo
              </Link>

              <Link href='/contacto' className='hover:text-lime-700'>
                Contacto
              </Link>

              <button
                type='button'
                aria-label='Carrito'
                className='rounded-full border px-3 py-1 text-xs md:text-sm hover:bg-gray-50'
              >
                🛒
              </button>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
