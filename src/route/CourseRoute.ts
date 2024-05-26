import express from "express";
import multer from "multer"
import { createCourse } from "../controller/CourseController";
import { validate } from "../middleware/validate";
import { createCourseSchema } from "../validators/CourseValidation";
import { validateImage } from "../middleware/validateImage";
import path from "path";

const router=express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, path.join(__dirname,'../CourseImage'));
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+"_"+file.originalname)
    }
})

const upload=multer({storage})
 

//Route 1: Create a course
router.post('/course',upload.single('image'),validateImage,validate(createCourseSchema),createCourse)

export default router;