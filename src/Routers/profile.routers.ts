import express,{Request, Response} from 'express'
import profile from '../models/profile.models'
import cloudinary from '../config/cloudinary'
import { uploadMultiple } from 'rod-fileupload'

const route = express()
route.use(express.json())

route.post('/',uploadMultiple('file', cloudinary),async(req: Request, res:Response)=>{
    try {
        // @ts-ignore
        const image = req.body.file.find(f=>f.type === 'image')
        // @ts-ignore
        const cv = req.body.file.find(f=>f.format === 'pdf')
        const description = req.body.description

        await profile.create({
            image: image.url,
            cv: cv.url,
            description
        })
        res.status(201).json({message:"Profile Created successfully!"})
    } catch (error: any) {
        res.status(500).json({message:"Failed to Create profile", error:error.message})
    }
})

route.get('/',async(req: Request, res:Response)=>{
    try {
        const profiles = await profile.find()
        res.status(201).json(profiles)
    } catch (error: any) {
        res.status(500).json({message:"Failed to Fetch Profile Data",error: error.message})
    }
})

export default route