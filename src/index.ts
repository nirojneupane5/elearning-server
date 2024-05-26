import express from "express";
import {connectDB} from "./db"
import dotenv from "dotenv";
import cors from "cors";
import CourseRoute from "./route/CourseRoute";
import { errorHandler } from "./middleware/errorMiddleware";
import path from "path";
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger/swaggerConfig";

// Load environment variables
dotenv.config();

// Initialize Express app
const app=express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());




app.use('/src/CourseImage',express.static(path.join(__dirname,'CourseImage')));

// Application routes
app.use('/api',CourseRoute);

//Global error handling middleware
app.use(errorHandler);

//Database Connection
connectDB()

// Serve the Swagger UI
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

//Defining the port
const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})