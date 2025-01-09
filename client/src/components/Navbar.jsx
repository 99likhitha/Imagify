import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import logo_2 from '../assets/logo_2.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { Appcontext } from '../context/AppContext.jsx';

const Navbar = () => {
    const {user , setshowLogin ,logout , credit }=useContext(Appcontext)
const navigate=useNavigate()

  return (
    <div className='flex item-center justify-between py-4'>
      <Link to ='/'> <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'></img> </Link>

      <div>
        {user ? 
        <div className='flex item-center gap-2 sm:gap-3'>
            <button onClick={()=>navigate('/buycredit')} className='flex item-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                <img className='w-5' src={assets.credit_star} alt=""></img>
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left:{credit}</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4 pt-2'>Hi,{user.name}</p>
            <div className='relative group'>
                <img src={assets.profile_icon} className='w-10 drop-shadow' alt=""></img>
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 '>

                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm '>
                        <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>
                            Logout
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        :
        <div className='flex item-center gap-2 sm:gap-5'>
            <p onClick={()=>navigate('/buycredit')} className='cursor-pointer pt-2'>Pricing</p>

            <button onClick={()=>setshowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
        </div>
        }
      </div>
        
    </div>
  )
}

export default Navbar