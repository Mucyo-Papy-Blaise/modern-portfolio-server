import mongoose, {Schema} from "mongoose"

interface IProjects {
    projectName: string,
    category: string,
    image: string,
    description: string,
    tools: string[],
    features: string[],
    Livelink: string,
    githubLink: string,
}

const projectSchema =  new Schema<IProjects>({
    projectName: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    tools: {type: [String], required: true},
    features: {type:[String], required: true},
    Livelink: {type: String, required: true},
    githubLink: {type: String, required: true},
})

const project = mongoose.model('projects', projectSchema)

export  default project