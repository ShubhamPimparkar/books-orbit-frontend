import React, { useEffect } from 'react'
import BannerComp from './BannerComp'
import FavBooksComp from './FavBooksComp'
import { PromoBanner } from './PromoBanner'
import { CategoryBanner } from './CategoryBanner'


export default function HomeComp() {
  useEffect(() => {
  }, [location]);

  return (
    <div>
      <BannerComp></BannerComp>
      <FavBooksComp></FavBooksComp>
      <PromoBanner></PromoBanner>
      <CategoryBanner></CategoryBanner>
    </div>

  )
}
