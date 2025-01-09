import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { Appcontext } from '../context/AppContext.jsx'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const {user,setshowLogin}=useContext(Appcontext)
    const navigate=useNavigate()
    const onClickHandler=()=>{

        if(user)
        {
            navigate('/result')
        }
        else{
            setshowLogin(true)
        }

    }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' 
    initial={{opacity:0.2,y:100 }}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
<motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
    initial={{opacity:0,y:-20 }}
   animate={{opacity:1,y:0}}
   transition={{duration:0.8,delay:0.2}}
    viewport={{once:true}}
>
    <p>Best text to image generator</p>
    <img src={assets.star_icon} alt=""></img>
</motion.div>


<motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:2,delay:0.4}}
>
    Turn to text to <span className='text-blue-600'>Image,</span> in seconds
</motion.h1>

<motion.p className='text-center max-w-xl mx-auto mt-5'
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.6}}
> Unleash your creativity with AI.Turn your imaginations into visual art in just seconds.Just describe your imagination and see the magic </motion.p>

<motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black width-auto mt-8 px-12 py-2.5 flex item-center gap-2 rounded-full'
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
initial={{opacity:0}}
animate={{opacity:1}}
transition={{default:{duration:0.8},opacity:{delay:0.6,duration:1} }}

>Generate Images 

<img  className='h-6' src={assets.star_group} alt=""></img>

</motion.button>


<motion.div className='flex flex-wrap justify-center mt-16 gap-3' 
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1,delay:1}}
>
{Array(6).fill('').map((item,index)=>(
<motion.img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:wd-10'
whileHover={{scale:1.05,duration:0.1}}

 src={index%2==0? assets.sample_img_2:assets.sample_img_1 } alt="" key={index} width={70}></motion.img>
))}
</motion.div>


<motion.p className='mt-2 text-neutral-600'
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.8,delay:1.2}}
>Generated Images from Imagify</motion.p>


    </motion.div>
  )
}

export default Header