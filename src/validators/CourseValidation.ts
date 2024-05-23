import Joi from "joi"

export const createCourseSchema=Joi.object({
    course_name:Joi.string().required().messages({
        "course":"Please enter the valid course",
        "required":"Course is required"
    }),
    price:Joi.number().required().messages({
        "price":"Price must be number",
        "required":"Course price must be required"
    })
})