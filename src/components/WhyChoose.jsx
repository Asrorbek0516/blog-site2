import React from 'react'
import WhyChooseCard from './WhyChooseCard'

//data
import { whychooseArr } from '../data/whychoose'

function WhyChoose() {
  return (
    <section className='py-32 '>

        <div className='w-full max-w-7xl mx-auto px-10'>

            <h2 className='text-center mb-4 font-bold text-4xl'>
                Why Choose Blogify?
            </h2>
            <p className='text-center mx-auto text-[20px] text-gray-400 mb-16 max-w-2xl'>
                Built with modern technologies and best practices to provide the best blogging experience.
            </p>

            <div className='flex gap-8'>
                {
                    whychooseArr.map(item=>{
                        return <WhyChooseCard key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default WhyChoose