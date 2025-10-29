import React from 'react';
import { motion } from 'framer-motion';

import ft1 from '../assets/fts/ft1.png';
import ft2 from '../assets/fts/ft2.png';
import ft3 from '../assets/fts/ft3.png';
import ft4 from '../assets/fts/ft4.png';


export default function DepoimentosFloatings() { 
  
  const fotos = [
  { src: ft1, alt: "Depoimento 1" },
  { src: ft2, alt: "Depoimento 2" },
  { src: ft3, alt: "Depoimento 3" },
  { src: ft4, alt: "Depoimento 4" },
  ];

  const floatVariants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -10, 0], 
    rotate: [0, 1, -1, 0], 
    transition: {
    duration: 8, 
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
    },
  },
  };

  return (
  <div className="relative py-16 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-16">
      O que nossos alunos dizem
    </h2>

    <div className="flex flex-wrap gap-10 sm:gap-12 justify-center items-center">
      {fotos.map((foto, index) => (
      <motion.div
        key={index}
        className="relative"
        style={{
        background: '#1a73ff', 
        padding: '3px', 
        borderRadius: '18px', 
        boxShadow: '0 0 20px rgba(26,115,255,0.5), 0 0 30px rgba(26,115,255,0.3)',
        }}
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{ ...floatVariants.animate.transition, delay: index * 0.7 }}
      >
        <img
        src={foto.src}
        alt={foto.alt}
        className="block w-full h-auto object-contain rounded-xl"
        style={{ maxWidth: '340px' }} 
        />
      </motion.div>
      ))}
    </div>
    </div>
  </div>
  );
}