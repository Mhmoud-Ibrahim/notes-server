import noteModel from "../../../db/models/notes.js"

// add notes
 const addNote = async(req,res)=>{
   const notes =  await noteModel.insertMany(req.body)
    res.json({message:"success",notes})
 }
 // get one notes
 const  getNote = async (req,res)=>{
     const note =  await  noteModel.findById({_id:req.params.id})
     res.json({message:"success",note})
 }
// get all notes
const getAllnotes = async(req,res)=>{
  const notes =  await  noteModel.find()
   res.json({message:"success",notes})
}


//delete note
const  deleteNote = async (req,res)=>{
    await  noteModel.findByIdAndDelete({_id:req.params.id})
    res.json({message:"deleted successfully"})
}
//update note
const  updateNote = async (req,res)=>{
    await  noteModel.findByIdAndUpdate({_id:req.params.id},
        {title:req.body.title,content:req.body.content})
    res.json({message:"updated successfully"})
}

export {
    getAllnotes,
    addNote,
    getNote,
    deleteNote,
    updateNote,

}