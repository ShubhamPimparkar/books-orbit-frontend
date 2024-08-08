import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBlog} from "react-icons/fa6"
export default function NavbarComp() {
    const[isMenuOpen,setIsMenuOpen] = useState(false);
    const[isSticky,setSticky] = useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        const handelScroll=()=>{
            if(window.scrollY > 100){
                setSticky(true);
            }else{
                setSticky(false);
            }
        }
        window.addEventListener("scroll",handelScroll);
        return () =>{
            window.addEventListener("scroll",handelScroll);

        }
    },[])

    const navItem = [
        {link:"home",path:"/"},
        {link:"about",path:"/about"},
        {link:"shop",path:"/shop"}
    ]
  return (
    <header>
        <nav>
            <div>
                {/* Logo Here */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'> 
                <FaBlog className='inline-block'></FaBlog > Books </Link>

                {/* nav items for large device */}

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItem.map(({link,path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-500'>{link}</Link>)
                    }
                </ul>


            </div>
        </nav>
    </header>
  )
}
