import mongoose from "mongoose";

 const userScehma = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    verifyEmail:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})
 const userModel = mongoose.model('user',userScehma)
 export default userModel;