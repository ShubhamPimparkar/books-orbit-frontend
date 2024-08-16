import React from 'react'
import { Link } from 'react-router-dom'

export const OrderPlaced = () => {
  return (
    <div className='m-36'>
        <h2 className=' bg-slate-400 p-4 rounded-sm font-bold text-blue-700 text-2xl text-center'>
            Order Placed
        </h2>
        <Link to={"/"} className='cursor-pointer underline text-blue-600'>back to shop</Link>
    </div>
  )
}
