'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-40 h-20 rounded-lg flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo Prodelinsa"
              width={500}
              height={98}
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/prodelinsa" 
            className={`${
              router.pathname === '/prodelinsa' 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Prodelinsa
          </Link>
          <Link 
            href="/catalogo" 
            className={`${
              router.pathname === '/catalogo' 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Catálogo
          </Link>
          <Link 
            href="/contacto" 
            className={`${
              router.pathname === '/contacto' 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Contacto
          </Link>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;