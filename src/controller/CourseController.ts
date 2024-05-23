import { Request, Response } from "express";
import { CreateCourseDto } from "../dtos/Course.dtos";
import Course from "../models/CourseSchema";


//Route 1: Create a course
export const createCourse=async(req:Request<{},{},CreateCourseDto>,res:Response)=>{
    const {course_name,price} =req.body;
    try{
        const course=await Course.create({course_name,price});
        res.status(201).json(course);
    }catch(error){
        res.status(400).json(error)
    }
}