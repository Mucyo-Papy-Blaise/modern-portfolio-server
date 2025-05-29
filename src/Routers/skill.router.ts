import express,{Request, Response} from 'express'
import skill from '../models/skill.models'
import cloudinary from '../config/cloudinary'
import uploadSingle from 'rod-fileupload'

const router =  express()
router.use(express.json())

router.post('/',uploadSingle('image', cloudinary),async(req:Request, res: Response)=>{
    try {
        const {image, title,level, percentage} = req.body

        await skill.create({
            image: image.url,
            title,
            level,
            percentage,
        })
        res.status(201).json({message: "Skills Created Successfully!"})
    } catch (error: any) {
        res.status(500).json({message:'Failed to Create Skills Entery!', error:error.message})
    }
})

router.get('/', async(req: Request, res: Response)=>{
    try {
        const skills = await skill.find()
        res.status(201).json(skills)
    } catch (error: any) {
        res.status(500).json({message:'Failed to Fetch Skills!', error:error.message})
    }
})

router.delete('/:id', async(req: Request , res: Response)=>{
    try {
        const {id} = req.params
        await skill.findOneAndDelete({_id: id})
        res.status(201).json({message:'Delete Skill Successfully!'})
    } catch (error: any) {
        res.status(500).json({message:"Failed to Delete Skill", error:error.message})
    }
})

export default router