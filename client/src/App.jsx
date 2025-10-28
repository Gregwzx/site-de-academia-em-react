import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Planos from './pages/Planos';
import Modalidades from './pages/Modalidades';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/planos' element={<Planos/>} />
          <Route path='/modalidades' element={<Modalidades/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
