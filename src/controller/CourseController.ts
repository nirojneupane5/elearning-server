import { NextFunction, Request, Response } from "express";
import { CreateCourseCategroy, CreateCourseDto } from "../dtos/Course.dtos";
import Course from "../models/CourseSchema";
import Category from "../models/CategorySchema";

//Route 1: Create a course
export const createCourse=async(req:Request<{},{},CreateCourseDto>,res:Response,next:NextFunction)=>{
    let {course_name,price,course_desc,category} =req.body;
    const { filename }=req.file!;
    let course_image=filename;
    let courseName:string =course_name.charAt(0).toUpperCase()+ course_name.toLowerCase().slice(1)
    let checkCourseName=await Course.findOne({course_name:courseName});
    if(checkCourseName){
        return res.status(409).json({error:"Course already exits"})
    }
    try{
        const course=await Course.create({course_name:courseName,course_desc,price,course_image,category});
        res.status(201).json(course);
    }catch(error){
        next(error)
    }
}

//ROute 2: Display all course
export const displayCourse=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const course=await Course.find({});
        res.status(200).json(course)
    }catch(error){
        next(error)
    }

}

//Route 3: Display single course
export const displaySingleCourse=async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params
    try{
        const course=await Course.findById({_id:id})
        return res.status(200).json(course)
    }catch(error){
        next(error)
    }
}

//Route 4: Search course 
export const searchCourse=async(req:Request,res:Response,next:NextFunction)=>{
    const query=req.query;
    try{

    const searchResult=await Course.find({
        "$or":[
            {course_name:{$regex:query.course_name,$options:"xi"}}
        ]
    })
        res.status(200).json(searchResult);
    }catch(error){
        next(error)
    }
}


// export const updateCourseCategory=async(req:Request,res:Response,next:NextFunction)=>{

//     const defaultCategory="Web Development";

//     try{
//         const course = await Course.updateMany(
//             {
//             category:{ $exists:false }
//             },
//             {
//                 $set:{category: defaultCategory}
//             }
//     )
//     res.status(200).json({message:"Course updated sucessfully",
//         updateCount:course.modifiedCount
//     })


//     }catch(error){
//         next(error)
//     }

// }

//Route 5: Adding course category
export const addCourseCategory=async(req:Request<{},{},CreateCourseCategroy>,res:Response,next:NextFunction)=>{
    const {category_name}=req.body;
    try{
        const category=await Category.create({category_name});
        res.status(201).json(category)
    }catch(error){
        next(error)
    }
}

//Route 6: Display all course category
export const displayCourseCategroy=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const courseCategory= await Category.find({});
        res.status(200).json(courseCategory)
    }catch(error){
       next(error) 
    }

}

//Route 7: Delete course category
export const deleteCourseCategory=async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params;
    try{
        const courseCategory=await Category.findByIdAndDelete({_id:id});

        if(!courseCategory){
            return res.status(404).json({message:"Course category not found"})
        }
        res.status(202).json({message:"Course category deleted sucessfully"})
    }catch(error){
        next(error)
    }
}

//Route 8: Update course category
export const updateCourseCategory=async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params;
    try{
        const courseCategory=await Category.findByIdAndUpdate({_id:id},{...req.body})
        if(!courseCategory){
            return res.status(404).json({error:"No such category exists"})
        }
        res.status(200).json({message:"Course category updated sucessfully"})
    }catch(error){
        next(error)
    }
}