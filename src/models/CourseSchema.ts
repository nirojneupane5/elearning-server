import mongoose, { Document, Model, Schema } from "mongoose"

interface ICourse extends Document{
    course_name:string;
    course_desc:string;
    price:number;
    course_image:string;
    category:string
}

const courseSchema:Schema<ICourse>=new Schema({
    course_name:{
        type:String,
        required:true
    },
    course_desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    course_image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const Course:Model<ICourse>=mongoose.model<ICourse>('Course',courseSchema)

export default Course;