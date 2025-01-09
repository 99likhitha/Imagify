import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Appcontext = createContext()
export const AppcontextProvider=(props)=>{
    const [user,setuser]=useState(null);
    const [showLogin,setshowLogin]=useState(false);
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [token,settoken]=useState(localStorage.getItem('token')) 
    const [credit,setcredit]=useState(false)

    const navigate=useNavigate()

    const loadCreditdata=async()=>{

        try{
            const {data} = await axios.get(backendUrl+'/api/user/credits',{headers:{token}}) 

            if(data.success)
            {
                setcredit(data.credits)
                setuser(data.user)

            }


        }
        catch(error)
        {
            console.log(error)
            toast.error(error.message)
        }
    }

    const generateImage=async(prompt)=>{
        try{
         const {data} =  await axios.post(backendUrl+'/api/image/generate-image',{prompt} , {headers:{token}});

         if(data.success)
         {
            loadCreditdata()
            return data.resultImage;
         }
         else
         {
            toast.error(data.message)
            loadCreditdata()
            if(data.creditBalance  === 0)
            {
                navigate('/buycredit')
            }
         }

        }
        catch(error)
        {
            console.log(error)
            toast.error(error.message)
        }

    }

    const logout=()=>{
        localStorage.removeItem('token')
        settoken("")
        setuser(null)

    }

    useEffect(()=>{
    if(token)
    {
        loadCreditdata()
    }

    },[token])

    const value={
        user,setuser ,showLogin,setshowLogin , backendUrl,token,settoken,credit,setcredit ,loadCreditdata,logout ,generateImage
    }

    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}

// export default AppcontextProvider