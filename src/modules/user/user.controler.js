import userModel from "../../../db/models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from "../../middleware/Email/sendEmail.js"


const signup = async (req,res)=>{
    await userModel.insertMany(req.body)
    sendEmail(req.body.email)
    res.json({message:"success"})
}

const verify = async(req,res)=>{
  jwt.verify(req.params.token,'MahmoudIbrahim', async(err,decoded)=>{
    if(err) return res.json(err)
    await userModel.findOneAndUpdate({email:decoded.email},{verifyEmail:true})
  res.json({message:"your email is verified successfully",})
})
}


const signin = async(req,res)=>{
    
    const user = await userModel.findOne({email:req.body.email})
    if(user) {
    const match = bcrypt.compareSync(req.body.password,user.password)
    if(match){
    if(user.verifyEmail){
      const token = jwt.sign({userId:user._id,email:user.email},'andyKey')
      return res.json({message:"login successfully..",token})
    }
     return res.json({message:"please check your email to verify"}) 
    }else{
      return res.json({message:"incorrect password"})
    } }
    res.json({message:"user not found"})
  } 

export {
    signup,
    signin,
    verify,
    
}