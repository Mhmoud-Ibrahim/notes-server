import mongoose from "mongoose";

 const noteScehma = new mongoose.Schema({
    title:String,
    content:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
    
},{timestamps:true})
 const noteModel = mongoose.model('note',noteScehma)
 export default noteModel;