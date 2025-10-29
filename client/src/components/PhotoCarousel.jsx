import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function PhotoCarousel(){
  const fotos = ['/src/assets/photo1.png','/src/assets/photo2.png','/src/assets/photo3.png','/src/assets/photo4.png','/src/assets/photo5.png'];
  return (
    <div className='bg-transparent'>
      <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay:3000 }} loop spaceBetween={20} slidesPerView={1} breakpoints={{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}}>
        {fotos.map((f,i)=>(
          <SwiperSlide key={i}><div className='rounded-2xl overflow-hidden shadow-lg bg-gray-900'><img src={f} alt={'gal-'+i} className='w-full h-60 object-cover' /></div></SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
