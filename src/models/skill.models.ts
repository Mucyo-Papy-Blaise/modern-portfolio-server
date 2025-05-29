import mongoose, { Schema } from "mongoose"

interface ISkills{
    image: string,
    title: string
    level: string,
    percentage:Number,
}

const  skillsSchema = new Schema<ISkills>({
    title: {type: String, required: true},
    image: {type: String, required: true},
    level: {type: String, required: true},
    percentage: {type: Number, required: true}
})

const skill = mongoose.model('skills', skillsSchema)

export default skill