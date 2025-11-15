'use client';

import Image from 'next/image';

export default function CatalogoPage() {
  return (
    <section className='min-h-screen bg-white pt-24 pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-12 text-center'>
          Catálogo de Productos
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Cereal Bowl */}
          <div className='relative w-full h-64 md:h-96'>
            <Image
              src='/cereal.png'
              alt='Cereal Prodelinsa'
              fill
              className='object-cover rounded-lg shadow-md'
            />
          </div>

          {/* Chips */}
          <div className='relative w-full h-64 md:h-96'>
            <Image
              src='/chips.png'
              alt='Chips Prodelinsa'
              fill
              className='object-cover rounded-lg shadow-md'
            />
          </div>

          {/* Candies */}
          <div className='relative w-full h-64 md:h-96'>
            <Image
              src='/candies.png'
              alt='Dulces Prodelinsa'
              fill
              className='object-cover rounded-lg shadow-md'
            />
          </div>

          {/* Corn Kernels */}
          <div className='relative w-full h-64 md:h-96'>
            <Image
              src='/corn.png'
              alt='Maíz Prodelinsa'
              fill
              className='object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
