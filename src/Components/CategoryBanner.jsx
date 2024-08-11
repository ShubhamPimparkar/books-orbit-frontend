import { Card } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';
// import 'swiper/css';
// import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react';


export const CategoryBanner = () => {

    const subTitle = "Choose Any Category";
    const btnText = "Get Started Now";

    const categoryList = 
    [{ imgUrl:'src/CategoryImgs/autobio.jpg' , imgAlt: 'category rajibraj91 rajibraj', iconName: 'icofont-brand-windows', title: 'Biography', },
    { imgUrl: 'src/CategoryImgs/comic.jpg', imgAlt: 'category rajibraj91 rajibraj', iconName: 'icofont-brand-windows', title: 'Comics', },
    { imgUrl: 'src/CategoryImgs/kids2.jpg', imgAlt: 'category rajibraj91 rajibraj', iconName: 'icofont-brand-windows', title: 'Tales', },
    { imgUrl: 'src/CategoryImgs/fantasy.jpg', imgAlt: 'category rajibraj91 rajibraj', iconName: 'icofont-brand-windows', title: 'Fantasy', },
    { imgUrl: 'src/CategoryImgs/thriller.jpg', imgAlt: 'category rajibraj91 rajibraj', iconName: 'icofont-brand-windows', title: 'Fiction', },
    { imgUrl: 'src/CategoryImgs/mystery.jpg', imgAlt: 'category rajibraj91 rajibraj', iconName: 'icofont-brand-windows', title: 'Mystery', },]

    return (
        <div className=''>
            <div className=''>
                <div className='my-16 px-4 lg:px-24'>
                    <h2 className='text-4xl  text-center font-bold my-11 text-black'> {subTitle}</h2>
                </div>

                {/* Cards */}
                <div>
                    <div className=' m-8 justify-between flex flex-row gap-12 flex-wrap'>
                       

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

                    {categoryList.map(book => <SwiperSlide className=''   >
                            <Link  to={`/shop`}>
                                <div className='relative'>
                              
                                    <img className=' h-60' src={book.imgUrl} alt=''/>
                                    {/* <div className='absolute top-2 right-2 bg-blue-700 hover:bg-black  px-2 py-2 rounded '>
                                        <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
                                    </div> */}
                                </div>
                                <div>
                                    <div>
                                    <h3 className='font-bold text-xl text-blue-700'>{book.title}</h3>
                                    {/* <p>{book.description}</p> */}
                                    </div>
                                    <div>
                                        {/* <p className='font-bold'>₹{book.price}</p> */}
                                    </div>
                                </div>
                            </Link>

                        </SwiperSlide>
                    )

                    }
                </Swiper>
                    </div>
                </div>
            </div>

        </div>


    )
}
