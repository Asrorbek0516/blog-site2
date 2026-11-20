import React from 'react'
import { Link } from 'react-router-dom'


import Logo from '../assets/images/Logo.png'

function Navbar() {
  return (
    <nav className='w-full max-w-7xl mx-auto px-10 py-4.5 flex items-center justify-between'>
        <Link to="">
        <img src={Logo} alt="" />
        </Link>

        <div className='flex gap-8 items-center'>
            <Link className='text-[#0F1729] font-semibold text-[18px]' to="/">
            Home
            </Link>
            <Link className='text-[#0F1729] font-semibold text-[18px]' to="/posts">
            Posts
            </Link>
            <Link className='font-semibold text-white bg-[#4346EF] py-2.5 px-4 rounded-2xl' to="/auth">
            Login
            </Link>
            
        </div>
        
    </nav>
  )
}

export default Navbar