import express from "express";
import {connectDB} from "./db"
import dotenv from "dotenv";
import cors from "cors";
import CourseRoute from "./route/CourseRoute";

const app=express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/api',CourseRoute);

//Database Connection
connectDB()

//Defining the port
const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})