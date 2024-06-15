import express from 'express'
import databaseConnection from './db/databaseConnection.js'
import userRouter from './src/modules/user/user.routes.js'
import noteRouter from './src/modules/notes/notes.routes.js'
import photoModel from './db/models/photo.models.js'
import multer from 'multer'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
const app = express()
app.use(cors())

app.use(express.json())
app.use(userRouter)
app.use(noteRouter)
import dotenv from 'dotenv'
dotenv.config()

app.use('/',express.static('uploads'))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
    cb(null,uuidv4()+ "-" + file.originalname )
    }
    })

    const fileFilter = (req,file,cb)=>{
       if(file.mimetype.startsWith ('image')){
        cb(null,true)
       }else{
        cb(null,false)
       }
    }

    const upload = multer({ storage,fileFilter })
  
    app.post('/photos',upload.single('img'),async(req,res)=>{
    req.body.img = req.file.filename
    await photoModel.insertMany(req.body)
    res.json({message:"success"})
  })
 
  app.get('/photos',async(req,res)=>{
   const photos = await  photoModel.find()
    res.json({message:"success",photos})
  })






const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    databaseConnection()
})
    