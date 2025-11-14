import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-40 h-20 rounded-lg flex items-center justify-center">
              <Image
                src="/logo.png"      
                alt="Logo"
                width={500}           
                height={98}
                priority             // Carga rápida si es parte del encabezado
              />
            </div>
          </div>

          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Prodelinsa</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Catálogo</a>
            <a href="#" className="text-blue-600 font-semibold">Contacto</a>
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/cereal-bowl.png" 
                alt="Prodelinsa Cereal Bowl" 
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-800">Contáctanos.</h1>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-600 text-lg">+ (503) 7802 2593</span>
                </div>
                
                {/* Emails */}
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-600 text-lg">comunicaciones.prodelinsa.sv@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-600 text-lg">rehu.prodelinsa@gmail.com</span>
                </div>
                
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                  <span className="text-gray-600 text-lg">
                    Calle Gabriela Mistral, Urb. Buenos Aires, #199, San Salvador, El salvador.
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Síguenos</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side */}
            <div className="space-y-4">
              <div className="space-y-2">
                <a href="#" className="block text-blue-600 hover:text-blue-700 font-semibold">FACEBOOK</a>
                <a href="#" className="block text-pink-600 hover:text-pink-700 font-semibold">INSTAGRAM</a>
                <a href="#" className="block text-green-600 hover:text-green-700 font-semibold">WHATSAPP</a>
              </div>
              <p className="text-sm text-gray-600">
                © 2022 Prodelinsa | Powered by Tema Astra para WordPress
              </p>
            </div>

            {/* Right side */}
            <div className="space-y-4 md:text-right">
              <div className="space-y-2">
                <p className="text-gray-700 font-semibold">PRODELINSA® EL SALVADOR</p>
                <a href="#" className="block text-gray-600 hover:text-gray-900">COTIZAR PRODUCTO</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">OPORTUNIDAD LABORAL</a>
              </div>
              <div className="flex space-x-6 md:justify-end">
                <a href="#" className="text-gray-600 hover:text-gray-900">CONDICIONES DE USO</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">POLÍTICA DE PRIVACIDAD</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;