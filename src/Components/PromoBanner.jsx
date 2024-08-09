import React from 'react'
import { Link } from 'react-router-dom'
import book11 from "../bookimgs/book22.png"
export const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-200 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h3 className='text-3xl font-bold mb-6 leading-snug' >2024 National Awarded Books Shortlisted</h3>
                <Link to="/shop" className='block'>
                <button className='font-semibold text-white bg-blue-700 px-5 py-2  rounded hover:bg-black transition-all duration-300'>Explore Books</button>
                
                </Link>
            </div>
            <div>
                <img src={book11} alt='' className='w-60'/>
            </div>
        </div>
    </div>
  )
}
