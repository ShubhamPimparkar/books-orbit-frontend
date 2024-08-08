import React from 'react'
import BannerComp from './BannerComp'
import FavBooksComp from './FavBooksComp'


export default function HomeComp() {
  return (
    <div className=''>
      <BannerComp></BannerComp>
      {/* <div className='h-screen'></div>
      <div className='h-screen bg-red-500'></div> */}
      <FavBooksComp></FavBooksComp>

    </div> 
    
  )
}
