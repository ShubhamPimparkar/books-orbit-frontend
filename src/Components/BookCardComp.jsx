import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6'
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export const BookCardComp = ({ headline, booksprop }) => {
    console.log("Inside Cards");
    console.log(booksprop);
    return (

        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-4xl  text-center font-bold my-11 text-black'> {headline}</h2>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full "
                >

                    {booksprop.map(book => <SwiperSlide  key={book.bookId} >
                            <Link  to={`/books/${book.bookId}`}>
                                <div className='relative'>
                              
                                    <img src={book.imgUrl} alt=''/>
                                    <div className='absolute top-2 right-2 bg-blue-700 hover:bg-black  px-2 py-2 rounded '>
                                        <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <h3 className='font-bold text-blue-700'>{book.bookName}</h3>
                            
                                    </div>
                                    <div>
                                        <p className='font-bold'>₹{book.price}</p>
                                    </div>
                                </div>
                            </Link>

                        </SwiperSlide>
                    )

                    }
                </Swiper>
            </div>
        </div>

    )
}
