import express from "express";
import multer from "multer"
import { addCourseCategory, createCourse, deleteCourseCategory, displayCourse, displayCourseCategroy, displaySingleCourse, searchCourse, updateCourseCategory } from "../controller/CourseController";
import { validate } from "../middleware/validate";
import { createCourseSchema } from "../validators/CourseValidation";
import { validateImage } from "../middleware/validateImage";
import path from "path";
import { createCourseCategory } from "../validators/CategoryValidation";

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
 *               course_desc:
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
router.post('/course',upload.single('image'),validateImage,validate(createCourseSchema),createCourse);

//Route 2: Get all Course
router.get("/course",displayCourse);

//Route 3: Get a single course
router.get("/course/:id",displaySingleCourse)

//Route 4: Search course
router.get('/courseSearch',searchCourse);

//Route 5: Update course
router.put('/update-course',updateCourseCategory);

//Route 6: Add course category
router.post('/course-category',validate(createCourseCategory),addCourseCategory);

//Route 7: Display all course category
router.get('/course-category',displayCourseCategroy)

//Route 8: Delete course category
router.delete('/course-category/:id',deleteCourseCategory)


export default router;