import mongoose, { Document, Model, Schema } from "mongoose"

interface ICourse extends Document{
    title:string;
    price:number;
}

const courseSchema:Schema<ICourse>=new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Course:Model<ICourse>=mongoose.model<ICourse>('Course',courseSchema)

export default Course;