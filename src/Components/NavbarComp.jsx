import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { GiBurningBook } from "react-icons/gi";
import logo from "../CategoryImgs/logo2.png"
export default function NavbarComp() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleLogout = () => {
        localStorage.setItem("isLogin", "false");
        localStorage.removeItem("userid");
        setIsLogin(false);
    }

    const navItems = [
        { link: "home", path: "/" },
        { link: "shop", path: "/shop" },
        { link: "Favourite", path: "/favs" },
        { link: "cart", path: "/cart" },
        // { link: "admin", path: "/admin/dashboard" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-5 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0 left-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo */}
                    <Link to="/" className='text-2xl font-bold text-slate-900 flex items-center gap-1'>
                        <img className='inline-block h-16 w-16' src={logo} /> Books Orbit
                    </Link>

                    {/* Nav items for large devices */}
                    <ul className='md:flex space-x-10 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-500'>
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* Login/Logout Link */}
                    {isLogin ? (
                        <div  className='md:flex space-x-10 hidden'>
                        <Link to="/admin/dashboard" className='block text-base text-black uppercase cursor-pointer hover:text-blue-500'>
                            Admin
                        </Link>
                        <Link to="/login" className='block text-base text-black uppercase cursor-pointer hover:text-blue-500' onClick={handleLogout}>
                            Logout
                        </Link>
                        </div>
                            
                    ) : (
                        <Link to="/login" className='block text-base text-black uppercase cursor-pointer hover:text-blue-500'>
                            Login
                        </Link>
                    )}

                    {/* Button for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                    </div>

                    {/* Menu button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
