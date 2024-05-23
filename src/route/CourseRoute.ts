import express from "express";
import { createCourse } from "../controller/CourseController";
const router=express.Router();


//Route 1: Create a course
router.post('/course',createCourse)

export default router;