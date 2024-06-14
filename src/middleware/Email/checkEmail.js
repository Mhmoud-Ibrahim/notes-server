import userModel from "../../../db/models/user.js"

const  checkEmail = async(req,res,next)=> {
    const user =await userModel.findOne({email:req.body.email})
    if(user) return res.json({message:"user is existed."})
        next()
}

export default checkEmail
