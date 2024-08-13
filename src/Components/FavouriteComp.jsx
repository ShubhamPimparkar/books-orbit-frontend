import axios from 'axios'
import { Card } from "flowbite-react";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
export const FavouriteComp = () => {
    const [favBooks, setFavBooks] = useState([])
    const userId = localStorage.getItem("userid");
    const fetchfav = async () => {
        try {
            const response = await fetch(`http://localhost:8080/books/getfavs/${userId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setFavBooks(data);
          
        } catch (error) {
            console.error('Error fetching cart items:', error);
            setError('Failed to fetch cart items');
        }
    }
    const removeFavorite = async (bookId) => {
        try {
             await axios.delete(`http://localhost:8080/books/delfav/${bookId}/${userId}`);
                toast.success("Removed")
                // setFavBooks(favBooks.filter((book) => book.bookId !== bookId));
                fetchfav()
            
            // Remove the book from the list
        } catch (error) {
            console.error('Error removing favorite book:', error);
            setError('Failed to remove favorite book');
        }
    };
    useEffect(() => {
        fetchfav()
    }, [])
    return (
        <div className='mt-20 px-4 lg:px-24'>
            <h3 className="mb-5 ml-2 mt-11 text-3xl text-blue-700 font-bold">Favourite Books</h3>
            <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
           
            {favBooks.length ? (favBooks.map((book) => (
                   
                    <Card key={book.bookId}
                        className="max-w-sm p-4 h-70 w-60 "
                        imgAlt=""
                        imgSrc={book.imgUrl}
                        // href={`/books/${book.bookId}`}
                        >

                        <Link to={`/books/${book.bookId}`}>
                        <h2 className='text-lg font-bold text-blue-700'>{book.bookName}</h2>
                        <p className='text-sm text-gray-500'>By : {book.authorName}</p>
                        {/* <p className='text-sm text-gray-700 mt-2'>{book.description}</p> */}
                        <div className=''>
                            <p className='text-sm  text-gray-500'>Quantity: {book.quantity}</p>
                            <p className='text-md mt-2 font-medium'>Price: ${book.price}</p>
                        </div>
                        </Link>
                        <button
                           type='button'
                            className="rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => removeFavorite(book.bookId)}
                        >
                            Remove

                        </button>

                    </Card>
                            
                ))
            ) : (
                <div className='text-xl ml-2 mt-5 bg-slate-300 rounded p-3  font-bold'>No favourite Books</div>
              )}
            </div>


        </div>
    )
}