import express from "express";
import dotenv from "dotenv";
import mailer_route from "./Router/mailer_router.js";

const app=express()
dotenv.config()

app.use("/",mailer_route)

app.listen(process.env.PORT,()=>{
    console.log(`Sever On Port ${process.env.PORT}`)
})