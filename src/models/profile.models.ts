import mongoose, { Schema } from "mongoose";

interface IProfile {
    image: string;
    cv: string;
    description: string,
}

const profileSchema = new Schema<IProfile>({
    image: {type: String, require: true},
    cv: {type: String, require: true},
    description: {type: String, require: true},
})

const profile = mongoose.model('profileInfo', profileSchema)

export default profile