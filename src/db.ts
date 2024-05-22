import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI=process.env.MONGOURI!;
//database connection
export const connectDB=()=>{
    try{
        mongoose.connect(mongoURI);
        console.log("Conntected to database sucessfully")
    }catch(error){
        console.log("Unable to connect to database",error)
    }
}