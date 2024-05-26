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
/**
 * @swagger
 * /course:
 *   post:
 *     summary: Create a new course
 *     description: Create a new course with course name, price, and image.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               course_name:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Course created successfully
 *       400:
 *         description: Invalid request body
 *       409:
 *         description: Course already exists
 */
router.post('/course',upload.single('image'),validateImage,validate(createCourseSchema),createCourse)

export default router;