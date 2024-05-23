import express from "express";
import { createCourse } from "../controller/CourseController";
import { validate } from "../middleware/validate";
import { createCourseSchema } from "../validators/CourseValidation";

const router=express.Router();

//Route 1: Create a course
router.post('/course',validate(createCourseSchema),createCourse)

export default router;