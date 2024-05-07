import express from "express"
import { mailer_controller } from "../Controller/mailer.controller.js"

const mailer_route=express.Router()

mailer_route.get("/",(req,res)=>{
    res.send("mail sender")
})
mailer_route.get("/mailer",mailer_controller)

export default mailer_route