import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'

//icons
import { FiTwitter,FiGithub,FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className='w-full max-w-7xl mx-auto px-10'>
        <div className='flex mb-8'>
            <div className='w-148'>
                <img src={Logo} alt="biogify logo" />
                <p className='w-96 mt-4'>
                    Create, read, and inspire. Discover amazing stories
                    written by talented creators from around the world.
                </p>
            </div>
            <div className='w-70 flex flex-col'>
                <h2>Quick Links</h2>
                <Link className='text-gray-400 mb-2' to="/">Home</Link>
                <Link className='text-gray-400 mb-2' to="/posts">Posts</Link>
                <Link className='text-gray-400 mb-2' to="/login">Login</Link>
            </div>
            <div>
                <h2 className='font-bold mb-4 '>Connect</h2>
                <div className='flex gap-3 items-center'>
                    <Link className='p-2' to = 'https://x.com'target="_blank">
                        <FiTwitter className='w-5 h-5 text-gray-400' />
                    </Link>
                    <Link className='p-2' to = 'https://github.com'target="_blank">
                        <FiGithub className='w-5 h-5 text-gray-400' />
                    </Link>
                    <Link className='p-2 ' to = 'https://linkedin.com'target="_blank">
                        <FiLinkedin className='w-5 h-5 text-gray-400' />
                    </Link>
                </div>
            </div>
        </div>
        <div className='pt-8 text-gray-400 text-center '>© 2025 Blogify. All rights reserved.</div>
    </div>
  )
}

export default Footer