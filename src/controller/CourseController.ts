import { NextFunction, Request, Response } from "express";
import { CreateCourseDto } from "../dtos/Course.dtos";
import Course from "../models/CourseSchema";


//Route 1: Create a course
export const createCourse=async(req:Request<{},{},CreateCourseDto>,res:Response,next:NextFunction)=>{
    let {course_name,price} =req.body;
    const { filename }=req.file!;
    let course_image=filename;
    let courseName:string =course_name.charAt(0).toUpperCase()+ course_name.toLowerCase().slice(1)
    
    try{
        const course=await Course.create({course_name:courseName,price,course_image});
        res.status(201).json(course);
    }catch(error){
        next(error)
    }
}