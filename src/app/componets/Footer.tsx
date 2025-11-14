'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="space-y-4">
            <div className="space-y-2">
              <a
                href="#"
                className="block text-blue-600 hover:text-blue-700 font-semibold"
              >
                FACEBOOK
              </a>
              <a
                href="#"
                className="block text-pink-600 hover:text-pink-700 font-semibold"
              >
                INSTAGRAM
              </a>
              <a
                href="#"
                className="block text-green-600 hover:text-green-700 font-semibold"
              >
                WHATSAPP
              </a>
            </div>
            <p className="text-sm text-gray-600">
              © 2022 Prodelinsa. Todos los derechos reservados.
            </p>
          </div>

          {/* Right side */}
          <div className="space-y-4 md:text-right">
            <div className="space-y-2">
              <p className="text-gray-700 font-semibold">PRODELINSA® EL SALVADOR</p>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                COTIZAR PRODUCTO
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                OPORTUNIDAD LABORAL
              </Link>
            </div>
            <div className="flex space-x-6 md:justify-end">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                CONDICIONES DE USO
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                POLÍTICA DE PRIVACIDAD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
