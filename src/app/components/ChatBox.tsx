// components/ChatBox.tsx
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

const ChatBox: React.FC = () => {
  return (
    <div className="fixed bottom-32 right-5">
      <a
        href="https://wa.me/50371688060" // reemplaza con tu número
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-white shadow-lg rounded-full p-3 text-green-600 hover:text-green-700"
      >
        <FaWhatsapp size={35} />

        {/* Tooltip que aparece al hacer hover */}
        <span className="absolute right-full mr-2 whitespace-nowrap bg-white text-green-600 font-semibold px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chatea con nosotros
        </span>
      </a>
    </div>
  );
};

export default ChatBox;
