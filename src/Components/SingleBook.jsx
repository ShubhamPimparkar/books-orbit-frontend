import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const SingleBook = () => { 
    const {bookId,price,description,bookName,quantity,imgUrl} = useLoaderData();
    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h2>{bookName}</h2>


        </div>
  )
}
