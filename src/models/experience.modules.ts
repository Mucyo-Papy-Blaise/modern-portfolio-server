import mongoose, { Schema } from "mongoose";

interface Iexperience {
    company: string,
    role: string,
    employment: string,
    startDate: Date,
    endDate?: Date,
    current: boolean,
    description: string,
}

const experienceSshema =  new Schema<Iexperience>({
    company: {type: String, required: true},
    role: {type: String, required: true},
    employment: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: function () {return !this.current}},
    current: {type: Boolean, required: false},
    description: {type: String, required: true},
})

const experience = mongoose.model('experience', experienceSshema)
export default experience