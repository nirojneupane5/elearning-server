import express from "express";
import {connectDB} from "./db"
import dotenv from "dotenv";

const app=express();

dotenv.config();

//Database Connection
connectDB()

//Defining the port
const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})