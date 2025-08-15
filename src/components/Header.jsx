import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full bg-gray-800 dark:bg-red-900 py-4 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white font-bold">Muna<span className='text-yellow-600'>Blog</span></Link>
        <nav className='flex gap-4 items-center'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Home </NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Services </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> About </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Contact </NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Blogs </NavLink>
        </nav>
        <div className='flex gap-4 items-center'>
            <a href="#" className=''>
                <RxDiscordLogo className='text-white text-2xl hover:text-yellow-600 transition duration-300' />
            </a>
            <a href="#" className=''>
                <FaInstagram className='text-white text-2xl hover:text-yellow-600 transition duration-300' />
            </a>
            <a href="#" className=''>
                <CiTwitter className='text-white text-2xl hover:text-yellow-600 transition duration-300' />
            </a>
            <button className='bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300'>Login</button>
        </div>
      </div> 
    </header>
  )
}

export default Header