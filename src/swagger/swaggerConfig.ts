import swaggerJSDoc from "swagger-jsdoc";
import path from "path"

const option:swaggerJSDoc.Options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Elearning platform",
            version:"1.0.0",
            description:"Elearning platform API documentation"
        }
    },
    apis:[path.join(__dirname,'../route/CourseRoute.ts')]
}

const swaggerSpec=swaggerJSDoc(option)
export default swaggerSpec;