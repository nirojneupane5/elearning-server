import { NextFunction, Request, Response } from "express";
import { CreateCourseDto } from "../dtos/Course.dtos";
import Course from "../models/CourseSchema";


//Route 1: Create a course
export const createCourse=async(req:Request<{},{},CreateCourseDto>,res:Response,next:NextFunction)=>{
    const {course_name,price} =req.body;
    const { filename }=req.file!;
    let course_image=filename;
    
    try{
        const course=await Course.create({course_name,price,course_image});
        res.status(201).json(course);
    }catch(error){
        next(error)
    }
}