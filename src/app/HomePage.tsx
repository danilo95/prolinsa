'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string; // usar ruta
};

const slides: Slide[] = [
  {
    id: 1,
    title: '¡ATRÉVETE A COMER SALUDABLE!',
    subtitle:
      'Descubre la proteína de soya PRODELINSA® y disfruta de una alimentación deliciosa y balanceada.',
    image: '/banner-1.png',
  },
  {
  id: 2,
  title: 'BOTANAS SALADAS Y CHURROS',
  subtitle:
    'Disfruta de nuestras crujientes botanas y churros, ideales para compartir en cualquier ocasión.',
  image: '/banner-2.jpeg',
},
{
  id: 3,
  title: 'MARSHMALLOWS Y BOMBONES',
  subtitle:
    'Suaves, dulces y esponjosos bombones que encantan a grandes y pequeños.',
  image: '/banner-3.jpeg',
},
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const activeSlide = slides[current];

  return (
    <div className='bg-white'>
      <section className='border-b bg-slate-50'>
        <div className='mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:py-14'>
          <div className='flex-1 space-y-4'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-lime-700'>
              Prodelinsa®
            </p>
            <h1 className='text-3xl font-extrabold leading-tight text-lime-800 md:text-4xl'>
              {activeSlide.title}
            </h1>
            <p className='max-w-md text-sm leading-relaxed text-slate-700 md:text-base'>
              {activeSlide.subtitle}
            </p>

            <div className='flex flex-wrap gap-3 pt-2'>
              <Link
                href='/products'
                className='rounded-full bg-lime-700 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-lime-800'
              >
                Ver productos
              </Link>
              <Link
                href='/aplicaciones'
                className='rounded-full border border-lime-700 px-5 py-2 text-sm font-semibold text-lime-700 hover:bg-lime-50'
              >
                Trabaja con nosotros
              </Link>
            </div>

            <div className='mt-4 flex gap-2'>
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type='button'
                  onClick={() => setCurrent(index)}
                  className={`h-2 w-6 rounded-full transition ${
                    index === current ? 'bg-lime-700' : 'bg-lime-300'
                  }`}
                  aria-label={`Ir al banner ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className='relative flex-1'>
            <div className='relative h-64 w-full md:h-80'>
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className='rounded-3xl object-cover shadow-lg'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center'>
          <div className='flex-1 flex justify-center'>
            <div className='relative h-64 w-64 md:h-80 md:w-80'>
              <div className='absolute inset-0 rounded-full bg-lime-100' />
              <Image
                src='/soya-bowl.jpg'
                alt='Protama de soya'
                fill
                className='rounded-full object-cover p-4'
              />
            </div>
          </div>

          <div className='flex-1 space-y-4'>
            <h2 className='text-2xl font-bold text-slate-900 md:text-3xl'>
              ¿Proteina de soya?
            </h2>
            <p className='text-sm leading-relaxed text-slate-700 md:text-base'>
              La proteína de soya vegetal texturizada, también conocida como
              soya texturizada, no contiene aditivos químicos ni colorantes y es
              100% natural. Es ideal para preparar platillos saludables,
              rendidores y llenos de sabor.
            </p>
            <p className='text-sm leading-relaxed text-slate-700 md:text-base'>
              Con PRODELINSA® puedes preparar tacos, pastas, sopas, guisos y
              muchas otras recetas, sustituyendo parcial o totalmente la carne
              tradicional.
            </p>

            <div className='pt-2'>
              <p className='text-sm font-semibold text-slate-900'>
                3 platillos que puedes preparar:
              </p>
              <ul className='list-disc pl-5 text-sm text-slate-700 md:text-base'>
                <li>Tacos con carne de soya.</li>
                <li>Carne de soya a la boloñesa con chipotle.</li>
                <li>Carne de soya con vegetales salteados.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-50'>
        <div className='mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2'>
          <article className='flex flex-col overflow-hidden rounded-3xl bg-white shadow-md'>
            <div className='relative h-64 w-full'>
              <Image
                src='/producto-cereal.png'
                alt='Cereal de bolitas'
                fill
                className='object-cover'
              />
            </div>
            <div className='space-y-2 px-6 py-5'>
              <h3 className='text-lg font-bold text-slate-900'>
                Cereal de bolitas
              </h3>
              <p className='text-sm text-slate-700'>
                Disfruta del nuevo y delicioso cereal de bolitas sabor a
                chocolate. Ideal para el desayuno o como snack saludable.
              </p>
              <p className='text-xs italic text-slate-500'>
                "El sabor del chocolate en su máxima expresión."
              </p>
            </div>
          </article>

          <article className='flex flex-col overflow-hidden rounded-3xl bg-white shadow-md'>
            <div className='relative h-64 w-full'>
              <Image
                src='/producto-empanizador.png'
                alt='Empanizador con especias'
                fill
                className='object-cover'
              />
            </div>
            <div className='space-y-2 px-6 py-5'>
              <h3 className='text-lg font-bold text-slate-900'>
                Empanizador con especias
              </h3>
              <p className='text-sm text-slate-700'>
                Hecho a base de hojuelas de maíz y mezclado con especias para
                darle una textura crujiente y un sabor único a tus platillos
                empanizados.
              </p>
              <p className='text-xs text-slate-500'>
                Ideal para pollo, pescado, vegetales y más.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
