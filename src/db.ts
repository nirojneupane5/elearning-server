import mongoose from "mongoose";

const mongoURI="mongodb://localhost:27017";
//database connection
export const connectDB=()=>{
    try{
        mongoose.connect(mongoURI);
        console.log("Conntected to database sucessfully")
    }catch(error){
        console.log("Unable to connect to database",error)
    }
}