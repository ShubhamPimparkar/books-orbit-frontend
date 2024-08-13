
import axios from 'axios';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { toast  } from 'react-toastify';
export const SingleBook = () => {
    const { bookId, price, description, authorName, bookName, quantity, imgUrl } = useLoaderData();
    const userId = localStorage.getItem("userid");
  
    const addtocart = async (bookid) => {
        try {
          const response = await axios.post(`http://localhost:8080/cart/public/carts/${userId}/books/${bookid}/quantity/1`)
          console.log(response);
          toast.success("Added to cart")
       
        } catch (error) {
          console.error('Error fetching category:', error);
        }
      };
    const addtofav = async (bookid) => {
        try {
            console.log(userId)
            console.log(bookid)
          const response = await axios.post(`http://localhost:8080/books/addtofav/${bookid}/${userId}`)
          console.log(response);
          toast.success("Added to Favs")
       
        } catch (error) {
          console.error('Error adding to fav:', error);
        }
      };
    return (
        <div className='mt-28 px-4 lg:px-24 '>

            <section className="py-8 bg-slate-200 rounded-xl md:py-16 dark:bg-gray-900  antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-10">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img className=" h-80" src={imgUrl} alt="" />


                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1
                                className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                            >
                                <span className='font-bold'> {bookName} </span>  (ISBN - {bookId} , Books Orbit Publication House)
                            </h1>
                            Delivery within 4-5 business days (Paperback)
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p
                                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                >
                                    ₹{price}
                                </p>

                                <div className="flex items-center gap-2 mt-2 sm:mt-0">



                                    <a
                                        href={`https://en.wikipedia.org/wiki/${authorName}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                    >
                                        {authorName}
                                    </a>

                                </div>
                            </div>


                            {/* Add to Cart */}
                            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                <button
                                    onClick={()=>addtofav(bookId)}
                                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium focus:outline-none bg-cyan-600 rounded-lg border border-gray-200 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100  text-white dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 hover:bg-cyan-500"
                                    type="button"
                                >
                                    Add to favorites
                                </button>

                                <button

                                    className="text-white bg-blue-700 mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-blue-600 flex items-center justify-center"
                                    type='button'
                                    onClick={()=>addtocart(bookId)}
                                >


                                    Add to cart
                                </button>
                            </div>


                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-700 dark:text-gray-400">
                                {description}
                            </p>


                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
