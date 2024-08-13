import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import EffectCard from './EffectCard';
import { Link, useNavigate } from 'react-router-dom';

export default function BannerComp() {
    const [bookName, setBookName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBookName(e.target.value);
    };

    const getBook = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/books/bookname/${bookName}`);
            navigate(`/books/${response.data.bookId}`);
        } catch (error) {
            console.error('Error fetching book:', error);
            setError('Failed to find the book');
        }
    };

    return (
        <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
            <div className='flex flex-col md:flex-row justify-start  items-center gap-12 py-40 '>
                {/* Left */}
                <div className='md:w-1/2 h-full mr-24 space-y-8'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>
                        Buy and Sell Books <span className='text-blue-700'>for best Prices</span>
                    </h2>
                    <p className='md:w-4/5 font-medium'>
                        Available in 3 Sizes, Over 8 Different Genres, Up to 80% discount, 100% Original Books, Includes Free Bookmarks, Doorstep Delivery.
                    </p>
                    <input
                        type='text'
                        id='book'
                        name='book'
                        placeholder='Search a Book'
                        value={bookName}
                        className='py-2 px-2 rounded-s-sm outline-none'
                        onChange={handleChange}
                    />
                    <button
                        className='px-6 py-2 bg-blue-700 hover:bg-black transition-all ease-in duration-200 text-white font-medium'
                        type='button'
                        onClick={getBook}
                    >
                        Search
                    </button>
                    {error && <p className='text-red-500'>{error}</p>}
                    <Link to="/shop" className='block'>
                        <button className='font-semibold text-white bg-red-500 px-5 py-2  rounded hover:bg-black transition-all duration-300'>Explore Now</button>

                    </Link>
                </div>
                <EffectCard />
            </div>
        </div>
    );
}
