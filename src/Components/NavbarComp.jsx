import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered , FaXmark } from "react-icons/fa6"
import {  GiBurningBook } from "react-icons/gi"
export default function NavbarComp() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener("scroll", handelScroll);
        return () => {
            window.addEventListener("scroll", handelScroll);

        }
    }, [])

    const navItem = [
        { link: "home", path: "/" },
        { link: "shop", path: "/shop" },
        { link: "cart", path: "/cart" },
        { link: "admin", path: "/admin/dashboard" },
        { link: "login", path: "/login" },
    ]
    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-5 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0 left-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo Here */}
                    <Link to="/" className='text-2xl font-bold text-purple-700 flex items-center gap-2'>
                        <GiBurningBook className='inline-block '></GiBurningBook > Books Orbit </Link>

                    {/* nav items for large device */}

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItem.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-500'>{link}</Link>)
                        }
                    </ul>
                    {/* btn for lg devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                    </div>

                    {/* menu btn for the mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItem.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer '>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}
