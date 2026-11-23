import React from 'react'
import Flash from '../assets/images/flash.png'

function WhyChooseCard({item}) {
  return (
    <div className='p-[33px] border border-gray-200 rounded-2xl max-w-[384px]'>
        <img className='mb-4' src={item.img} alt="" />
        <h3 className='mb-2.25 font-semibold text-[20px]'>{item.title}</h3>
        <p className='text-gray-400'>
            {item.text}
        </p>
    </div>
  )
}

export default WhyChooseCard