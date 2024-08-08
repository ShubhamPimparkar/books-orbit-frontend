import React from 'react'
import EffectCard from './EffectCard'

export default function BannerComp() {
    return (
        <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40 '>

                {/* Left */}
                <div className='md:w-1/2 h-full space-y-8'>

                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Books <span className='text-blue-700'>for best Prices</span> </h2>
                    <p className='md:w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nulla velit molestiae ut veritatis id quam dolores! Fugiat odio quasi cum doloremque libero voluptates, nesciunt, quos quod iure qui hic.</p>
                    <input type='search' id='search' name='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none' ></input>
                    <button className='px-6 py-2 bg-blue-700 hover:bg-black transition-all ease-in duration-200 text-white font-medium' type=''>Search</button>
                </div>

                {/* Right */}
                <EffectCard />
                <div>
                </div>
            </div>
        </div>
    )
}
