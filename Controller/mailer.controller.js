import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config()

const transporter = nodemailer.createTransport({
    sever:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

const mail_options = await transporter.sendMail({
    from: 'Nandhagopal TS', // sender address
    to: "codingmoz12@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

export const mailer_controller= async (transporter,mail_options)=>{
   try {
    await transporter.sendMail(mail_options)
    console.log("Email send successfully")
   } catch (error) {
    console.log(error);
   }
}

mailer_controller(transporter,mail_options)

