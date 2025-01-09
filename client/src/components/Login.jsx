import React, { useContext, useEffect, useState  } from 'react'
import { assets } from '../assets/assets'
import userIcon from '../assets/user_icon.png';
import { Appcontext } from '../context/AppContext.jsx';
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {

    const [state,setstate]=useState('Login')
    const {setshowLogin,backendUrl,settoken,setuser,showLogin}=useContext(Appcontext)

    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")


    const onSubmitHandler= async(e)=>{
        e.preventDefault();

        try{
            if(state ==="Login")
            {
              const {data} = await axios.post(backendUrl+'/api/user/login' ,{email,password})
                if(data.success)
                {
                    settoken(data.token)
                    setuser(data.user)
                    localStorage.setItem('token',data.token)
                    setshowLogin(false)
                }
                else
                {
                    toast.error(data.message)
                }

            }

            else{
                const {data} = await axios.post(backendUrl+'/api/user/register' ,{name,email,password})
                if(data.success)
                {
                    settoken(data.token)
                    setuser(data.user)
                    localStorage.setItem('token',data.token)
                    setshowLogin(false)
                }
                else
                {
                    toast.error(data.message)
                }

            }

        }
        catch(error)
        {
            toast.error(error.message)
        }
    }


    useEffect(()=>{
        document.body.style.overflow='hidden';

        return ()=>{
            document.body.style.overflow='unset';
        }
    },[])

    useEffect(()=>{

        console.log("show login check",showLogin)
    },[showLogin])


  return (
    <div className='fixed left-0 top-0 bottom-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center '>


    <motion.form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'
        initial={{opacity:0.2,y:50}}
        transition={{duration:0.3}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}} 
    >
        <h1 className='text-center text-2xl text-neutral-700 font-medium '>{state}</h1>
        <p className='text-sm'>Welcome Back! Please sign in to continue</p>

        {state!=='Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={userIcon} alt=""></img>
            <input onChange={e=>setname(e.target.value)} value={name} className='outline-none text-sm' type='text' placeholder='Full Name' required></input>
        </div>
    }
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.email_icon} alt=""></img>
            <input onChange={e=>setemail(e.target.value)} value={email} className='outline-none text-sm' type='email' placeholder='Email Id' required></input>
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.lock_icon} alt=""></img>
            <input onChange={e=>setpassword(e.target.value)} value={password} className='outline-none text-sm' type='password' placeholder='Password' required></input>
        </div>

    <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password</p>
    <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state=='Login' ? 'Login' : 'Create account'}</button>

    {state==='Login' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Sign Up')}>Sign Up</span></p>
    :
    <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Login')}>Login</span></p>
    }
    
    <img src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' onClick={()=>{setshowLogin(false)}}></img>

    </motion.form>

    </div>
 
  )
}

export default Login