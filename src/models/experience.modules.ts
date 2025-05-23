import mongoose, { Schema } from "mongoose";

interface Iexperience {
    company: string,
    role: string,
    employment: string,
    startDate: string,
    endDate: string,
    description: string,
}

const experienceSshema =  new Schema<Iexperience>({
    company: {type: String, required: true},
    role: {type: String, required: true},
    employment: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    description: {type: String, required: true},
})

const experience = mongoose.model('experience', experienceSshema)
export default experience