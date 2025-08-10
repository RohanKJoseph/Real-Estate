import React from 'react'
import { FaSearch } from  'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
            <h1  className='font-bold text-sm sm:text-xl flex-wrap'>
            <span className='text-slate-500'>RKJ</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='flex items-center bg-slate-100 p-2.5 rounded-lg shadow-md'>
            <input type="text" placeholder="Search..." className='bg-transparent outline-none w-24  sm:w-64'/>
            <FaSearch className='text-slate-500 cursor-pointer hover:text-slate-700 transition duration-200' />
        </form> 
        <ul className='flex items-center gap-4'>
            <Link to ="/">
            <li className='hidden md:inline-block mx-2 text-slate-700 hover:text-slate-900 transition duration-200'>
                <a href="/">Home</a>
            </li>
            </Link>
            <Link to="/about">
            <li className='hidden md:inline-block mx-2 text-slate-700 hover:text-slate-900 transition duration-200'>
                <a href="/about">About</a>
            </li>
            </Link>
            <Link to="/signin">
            <li className='md:inline-block mx-2 text-slate-700 hover:text-slate-900 transition duration-200'>
                <a href="/signin">Sign In</a>
            </li>
            </Link>
            <Link to="/signout">
            <li className='hidden md:inline-block mx-2 text-slate-700 hover:text-slate-900  transition duration-200'>
                <a href="/signout">Sign Out</a>
            </li>
            </Link>
            <Link to="/profile">
            <li className='hidden md:inline-block mx-2 text-slate-700 hover:text-slate-900 transition duration-200'>
                <a href="/profile">Profile</a>
            </li>
            </Link> 
        </ul>
        </div>
        
    </header>
  )
}

export default Header