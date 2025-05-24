import mongoose,{ Schema } from "mongoose";

interface Ieducation {
    startYear: string,
    endYear:string,
    program: string,
    school: string,
    degree: string
}
const educationSchema = new Schema<Ieducation>({
    startYear:{type: String, require: true},
    endYear:{type:String, required: true},
    program:{type: String, require: true},
    school:{type: String, require: true},
    degree:{type: String, require: true},
})

const education =  mongoose.model('education',educationSchema)
export default education