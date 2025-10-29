import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className='bg-black/80 backdrop-blur-sm sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to='/' className='flex items-center gap-3'>
          <img src='/src/assets/logo.svg' alt='AURA FIT' className='h-10' />
          <span className='font-extrabold text-xs text-blue-600'>AURA FIT</span>
        </Link>
        <nav className='space-x-4 text-white hidden md:flex'>
          <Link to='/'>INÍCIO</Link>
          <Link to='/planos'>PLANOS</Link>
        </nav>
        <a className='header-btn' href='#contato'>MATRICULE-SE</a>
      </div>
    </header>
  )
}
