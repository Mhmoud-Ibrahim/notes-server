import nodemailer from 'nodemailer'
import emailtemplate from './emailtemplate.js';
 import jwt from 'jsonwebtoken'



export const sendEmail = async(email)=>{
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "mahmoudd188@gmail.com",
      pass: "arfabcoszvvahizq",
    },
  });

const token = jwt.sign({email},'MahmoudIbrahim')

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Notes"mahmoudd188@gmail.com', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      html: emailtemplate(token), // html body
    });
    console.log("Message sent: %s", info.messageId);
    
}
  