import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"


const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}} 
    >
    <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
    <p className='text-gray-500 mb-12 '>What are users are saying</p>
    <div className='flex flex-wrap gap-6'>
    {testimonialsData.map((item,index)=>(
        <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
            <div className='flex flex-col items-center'>
                <img src={item.image} className='rounded-full w-14' alt=""></img>
                <h2 className='text-xl font-semibold mt-3'>{item.name}</h2>
                <p className='text-gray-500 mb-4'>{item.role}</p>
                <div className='flex mb-4'>
                    {Array(item.stars).fill().map((newitem,indexnew)=>(
                        <img key={indexnew} src={assets.rating_star} alt=""className='text-center text-sm text-gray-600 ' >
                        </img>
                    ))}
                </div>
                <p className='text-center text-sm text-gray-600'>{item.text}</p>
            </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Testimonials