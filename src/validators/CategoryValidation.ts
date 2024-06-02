import Joi from "joi";

export const createCourseCategory=Joi.object({
    category_name:Joi.string().required().messages({
        "string.base":"Category name must be string",
        "any.required":"Category must be required"
    })
})