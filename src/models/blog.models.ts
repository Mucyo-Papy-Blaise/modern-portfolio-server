import mongoose, { Schema } from "mongoose"

interface IBlog {
    title: string,
    summary: string,
    content: string,
    author: string,
    date: Date,
    readTime: string,
    category: string,
    image: string,
    tags: string[],
}

const blogSchema = new Schema<IBlog>({
    title: {type: String, required: true},
    summary: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now},
    readTime: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    tags: {type: [String], required: true}
})

const blog = mongoose.model('blogs', blogSchema)

export default blog