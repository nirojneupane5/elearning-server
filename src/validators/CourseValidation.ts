import Joi from "joi"

export const createCourseSchema=Joi.object({
    course_name:Joi.string().required().messages({
        "string.base":"Please enter the valid course",
        "any.required":"Course is required"
    }),
    course_desc:Joi.string().required().messages({
        "string.base":"Please enter the valid course description",
        "any.required":"Course description is required"
    }),
    price:Joi.number().greater(0).required().messages({
        "number.base":"Price must be number",
        "number.greater":"Price must be greater than 0",
        "any.required":"Course price must be required"
    }),
})