import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
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
                    className="mySwiper w-full h-full"
                >

                    {booksprop.map(book => <SwiperSlide key={book.bookId} >
                            <Link to="/">
                                <div>
                              
                                    <img src={book.imgUrl} alt=''/>
                                </div>
                                <div>
                                    <h3>{book.bookName}</h3>
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
