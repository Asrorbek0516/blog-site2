import React from 'react'
import { Outlet } from 'react-router-dom'
// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PublicLayout() {
  return (
    <>
       <header className='bg-white shadow-2xs'>
        <Navbar />
        </header> 
       <main className='grow'>
        <Outlet />
       </main>
       <footer className='py-12 '>
        
        <Footer />
       </footer>
    </>
  )
}

export default PublicLayout