import express from 'express'
import { signin, signup, verify } from './user.controler.js';
import checkEmail from '../../middleware/Email/checkEmail.js';
import { hashpassword } from '../../middleware/Email/hashpassword.js';

const userRouter = express.Router()
   

  
userRouter.post('/signup',checkEmail,hashpassword,signup)
userRouter.post('/signin',signin)
userRouter.get('/verify/:token',verify)



export default userRouter;