import express, { Request, Response } from "express";

const router=express.Router();


//Route 1 Get all course list
router.get('/course',(req:Request,res:Response)=>{
    res.json({msg:"Get all the book"})
})

export default router;