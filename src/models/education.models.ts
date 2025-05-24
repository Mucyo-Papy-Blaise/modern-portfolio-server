import mongoose,{ Schema } from "mongoose";

interface Ieducation {
    startYear: Date,
    endYear:Date,
    program: string,
    school: string,
    degree: string
}
const educationSchema = new Schema<Ieducation>({
    startYear:{type: Date, require: true},
    endYear:{type:Date, required: true},
    program:{type: String, require: true},
    school:{type: String, require: true},
    degree:{type: String, require: true},
})

const education =  mongoose.model('education',educationSchema)
export default education