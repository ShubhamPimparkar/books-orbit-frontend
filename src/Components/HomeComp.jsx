import React, { useEffect } from 'react'
import BannerComp from './BannerComp'
import FavBooksComp from './FavBooksComp'
import { PromoBanner } from './PromoBanner'
import { CategoryBanner } from './CategoryBanner'


export default function HomeComp() {
  useEffect(() => {

  }, [location]);

  return (
    <div className=''>
      <BannerComp></BannerComp>
      {/* <div className='h-screen'></div>
      <div className='h-screen bg-red-500'></div> */}
      <FavBooksComp></FavBooksComp>
      <PromoBanner></PromoBanner>
      <CategoryBanner></CategoryBanner>
    </div>

  )
}
