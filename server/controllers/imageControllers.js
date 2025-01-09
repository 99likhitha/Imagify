import axios from "axios"
import FormData from "form-data"
import userModel from "../models/userModel.js";


const generateImage=async(req,res)=>{


    try{

        const {userId,prompt} = req.body

        const user=await userModel.findById(userId)

        if(!user || !prompt)
        {
           return res.json({success:false, message:"Missing details"})
        }
        if(user.creditBalance ===0 || user.creditBalance <0)
        {
           return res.json({success:false, message:"No credit balance",creditBalance:user.creditBalance})
        }

        const formData= new FormData()
        formData.append('prompt',prompt)

        const {data}= await axios.post("https://clipdrop-api.co/text-to-image/v1",formData,{
            headers: {
            'x-api-key': process.env.CLIP_DROP_API
             },       
             responseType:'arraybuffer'
            })

            const base64Image= Buffer.from(data,'binary').toString('base64')
            const resultImage=`data:image/png;base64,${base64Image}`

            await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance-1})
          return  res.json({success:true,message:"Image Generated",creditBalance:user.creditBalance-1, resultImage})




    }
    catch(error)
    {
        console.log(error)
       return res.json({success:false ,message:error.message})
    }
}

export default generateImage