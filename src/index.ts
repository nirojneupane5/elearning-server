import express from "express";
import {connectDB} from "./db"
const app=express();

//Database Connection
connectDB()
const port=4000;

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})