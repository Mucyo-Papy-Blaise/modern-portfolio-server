import mongoose,{Schema} from "mongoose"

interface IService {
    icon: string,
    serviceName: string,
    description: string,
    features: string[],
}

const serviceSchema =  new Schema<IService>({
    icon:{type: String, required: true},
    serviceName:{type: String, required: true},
    description:{type: String, required: true},
    features:{type: [String], required: true},
})

const service = mongoose.model('services', serviceSchema)
export default service
