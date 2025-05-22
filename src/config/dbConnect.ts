import mongoose from "mongoose";
import env from './env'

const connectdb =async()=>{
    try {
        await mongoose.connect(env.mongo_db_uri)
        console.log('db connected successful')
    } catch (error: any) {
        console.log('db is not connected well',error.message)
    }
}
export default connectdb