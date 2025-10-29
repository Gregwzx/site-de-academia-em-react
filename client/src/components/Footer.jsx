import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-800 to-black text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left text-sm leading-relaxed">
          <p className="mb-1">Localizada no olimpo 🏦⚡</p>
          <p>
            Jailson Ferreira © Todos os direitos reservados | Desenvolvido por{' '}
            <a
              href="https://github.com/Gregwzx"
              className="text-yellow-400 hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Jailson Ferreira"
            >
              Jailson Ferreira
            </a>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/l1.ferreira/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors text-sm font-medium"
            aria-label="Instagram UnderGym"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/5581998965933"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-lg text-white text-3xl transition-transform duration-200 hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}