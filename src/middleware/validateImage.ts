//Image validation
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const imageSchema=Joi.object({
    mimetype: Joi.string().valid('image/jpeg', 'image/png').required(),
    size: Joi.number().max(5 * 1024 * 1024).required() // 5MB limit
}).unknown(true);

export const validateImage=(req:Request, res:Response,next:NextFunction)=>{

    const {file}=req;

    if(!file){
        return res.status(404).json({error:"Course image not found!!"})
    }

    const {error}=imageSchema.validate(file);
    if(error){
        return res.status(400).json({error:error.details[0].message})
    }

    next();

}