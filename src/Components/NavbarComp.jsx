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
                <Link to="/"> <FaBlog></FaBlog> Books </Link>
            </div>
        </nav>
    </header>
  )
}
