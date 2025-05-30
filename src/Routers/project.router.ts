import express, {Request,Response} from 'express'
import project from '../models/projects.modules'
import uploadSingle from 'rod-fileupload'
import cloudinary from '../config/cloudinary'

const router = express()
router.use(express.json())

router.post('/',uploadSingle('image',cloudinary),async(req: Request, res:Response)=>{
    try {
    const {projectName,category,image,description,tools,features,Livelink,githubLink} = req.body

    const persTools =  JSON.parse(tools)
    const persFeatures = JSON.parse(features)
    await project.create({
        projectName,
        category,
        image: image.url,
        description,
        tools:persTools,
        features:persFeatures,
        Livelink,
        githubLink,
    })
        res.status(201).json({message:'Project created successfully'})
    } catch (error: any) {
        res.status(500).json({message:'Failed to create projects', error: error.message})
    }
})

router.get('/',async(req:Request, res:Response)=>{
    try {
        const projects = await project.find()
        res.status(201).json(projects)
    } catch (error: any) {
        res.status(500).json({message:'Failed to Fetch Project Data!', error: error.message})
    }
})

export default router