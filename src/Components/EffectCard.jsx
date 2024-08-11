import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import '../Static/EffectCard.css';

import { EffectCards } from 'swiper/modules';

export default function EffectCard() {
  useEffect(()=>{
  
  },[])
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide/>
        <SwiperSlide/>
        <SwiperSlide/>
        <SwiperSlide/>
        <SwiperSlide/>
        <SwiperSlide/>
        
      </Swiper>
    </div>
  );
}
