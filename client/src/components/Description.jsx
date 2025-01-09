import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}} 
    >
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8 '>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg '></img>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4 '>Introducing AI powered Text to Image generator</h2>
                <p className='text-gray-600 mb-4'>Our tool transforms your text into stunning images within seconds, bringing your ideas to life effortlessly. Simply type in your thoughts, and watch as they are turned into vivid, high-quality visuals. Whether it's a simple phrase or a complex concept, our generator delivers results that inspire and captivate.</p>
                <p className='text-gray-600'>Enter your text, and our state-of-the-art image generator will bring your imagination to life by creating stunning visuals in just seconds. Whether you're visualizing simple ideas or intricate concepts, our tool delivers high-quality, detailed, and captivating images effortlessly, making your words a reality.</p>
                </div>
        </div>
    </motion.div>
  )
}

export default Description