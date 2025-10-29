import React from 'react';
import { motion } from 'framer-motion';
import Planos from './Planos';
import Modalidades from './Modalidades';
import PhotoCarousel from '../components/PhotoCarousel';
import DepoimentosFloatings from '../components/DepoimentosFloatings';
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  return (
    <div className='home-root'>
      <section className='relative h-screen flex items-center justify-center text-center overflow-hidden'>
        <video src='/src/assets/hero.mp4' autoPlay loop muted className='absolute inset-0 w-full h-full object-cover opacity-30' />
        <motion.div initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} className='z-10 max-w-3xl mx-auto p-6'>
          <h1 className='text-6xl md:text-7xl font-extrabold leading-tight text-blue-600 neon-title'>AURA FIT</h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.8 }} className='text-white mt-4 text-lg md:text-xl'>AURA + EGO </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className='mt-8 flex justify-center gap-4'>
            <a href='#planos' className='header-btn'>Matricule-se</a>
            <a href='#modalidades' className='px-5 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600/10 transition'>Ver Modalidades</a>
          </motion.div>
        </motion.div>
      </section>

    <motion.section
  id="destaques"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="max-w-6xl mx-auto px-6 py-12"
>
  <div className="grid gap-8 md:grid-cols-2 items-center">
    {/* Texto à esquerda */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 neon-title leading-tight">
        ESCOLHAS<br /> MAIS SAUDÁVEIS
      </h2>

      <p className="text-white text-lg max-w-xl">
        Na Aura fit, cada treino é planejado para farma aura. Nosso
        foco é garantir sua aura e ego — com programas personalizados,
        equipamentos modernos e acompanhamento de profissionais qualificados.
      </p>

      <div className="flex flex-wrap gap-4 items-center">
        <a href="#planos" className="header-btn">Ver Planos</a>
        <a
          href="#contato"
          className="px-5 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600/10 transition"
        >
          Fale com um Coach
        </a>
      </div>
    </motion.div>
    {/* Imagem à direita */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center md:justify-end"
    >
      <img
        src={new URL('../assets/woman.png', import.meta.url).href}
        alt="Instrutora UNDERGYM"
        className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-xl"
      />
    </motion.div>

  </div>
  
        <DepoimentosFloatings />

        <section className='max-w-6xl mx-auto p-6'>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>Galeria</h2>
        <PhotoCarousel />
      </section>
</motion.section>


      <Modalidades />
    
      <section className='relative h-screen flex items-center justify-center text-center overflow-hidden'>
        <video src='/src/assets/footer.mp4' autoPlay loop muted className='absolute inset-0 w-full h-full object-cover opacity-30' />
        <motion.div initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} className='z-10 max-w-3xl mx-auto p-6'>
          <h1 className='text-5xl md:text-5xl font-extrabold leading-tight text-white'>VEM FAZER PARTE DA <span className='text-5xl md:text-5xl font-extrabold leading-tight text-blue-500 neon-title'>AURA</span></h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.8 }} className='text-white mt-4 text-lg md:text-xl'>farme aura conosco e se torne <span className='text-blue-500 neon-title'>lendário</span> !</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className='mt-8 flex justify-center gap-4'>
            <a href='#modalidades' className='px-5 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600/10 transition'>Matricule-se</a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
