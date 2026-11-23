import React from 'react'
import Hero from '../assets/images/Hero.png'

//icons
import { FaLongArrowAltRight } from "react-icons/fa";


function HeroSection() {
  return (
    <section className='bg-[#f3f1fd]'>

        <div className='w-full max-w-7xl justify-between mx-auto px-10 flex py-34.25 '>
            <div className='max-w-146'>
                <h1 className='font-bold text-[60px] leading-14 mb-6'>Create, Read, <br /> <span className='text-[#2528E1]'>Inspire</span>.</h1>
                <p className='text-[#6B7280] text-[20px] mb-6 max-w-122.25 '>
                    Discover stories written by amazing people. Share your knowledge and inspire others with your unique perspective.
               </p>
               <div className='flex items-center gap-4'>

                <button className='px-8 py-3 bg-[#2528E1] flex items-center text-white rounded-2xl'>Explore Posts

                    <FaLongArrowAltRight />
                </button>
                <button className='px-8 py-3 rounded-2xl text-black bg-white'>Get Started</button>
               </div>
            </div>

            <div>

                <img src={Hero} alt="" />
            </div>
        </div>
    </section>
  )
}

export default HeroSection