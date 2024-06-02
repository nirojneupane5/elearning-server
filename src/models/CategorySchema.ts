//Course category
import mongoose,{Document,Model,Schema} from "mongoose";

interface ICategory extends Document{
    category_name:string
}

const courseSchema:Schema<ICategory>=new Schema({
    category_name:{
        type:String,
        required:true
    }
})

const Category:Model<ICategory>=mongoose.model<ICategory>('course-category',courseSchema);
export default Category;