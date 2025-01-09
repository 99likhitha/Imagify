import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex item-center justify-between gap-4 py-3 mt-20 '> 
        <img src={assets.logo} alt="" width={150}></img>

        <p className='flex-1 border-l border-gray-400 pl-4 text-gray-500 max-sm:hidden'>Copyright @Likhitha Kodali | All rights reserved.</p>

        <div className='flex gap-2.5 '>
            <img src={assets.facebook_icon} width={35} alt=""></img>
            <img src={assets.twitter_icon} width={35} alt=""></img>
            <img src={assets.instagram_icon} width={35} alt=""></img>
        </div>
    </div>
  )
}

export default Footer