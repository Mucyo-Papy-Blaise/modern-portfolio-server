import express,{Request, Response} from 'express'
import blog from '../models/blog.models'
import cloudinary from '../config/cloudinary'
import uploadSingle from 'rod-fileupload'

const router = express()
router.use(express.json())

router.post('/',uploadSingle('image', cloudinary) ,async(req: Request, res: Response)=>{
    try {
        const {title,summary,content,author,readTime,category,image, tags} = req.body
      
        const tagsPars = JSON.parse(tags)
        await blog.create({
            title,
            summary,
            content,
            author,
            readTime,
            category,
            image: image.url ,
            tags: tagsPars
        })
        res.status(201).json({message:'Bloga Created successfully!'})
    } catch (error: any) {
        res.status(500).json({message:'Failed to Create blogs', error:error.message})
    }
})

router.get('/', async(req: Request, res:Response)=>{
    try {
        const blogs =  await blog.find()
        res.status(201).json(blogs)
    } catch (error: any) {
      res.status(500).json({message:'Failed to get The Blogs Data', error:error.message})  
    }
})

router.delete('/:id', async(req:Request, res:Response)=>{
    try {
        const {id} = req.params
        await blog.findOneAndDelete({_id: id})
        res.status(201).json({message:"blog Deleted Successfully!"})
    } catch (error: any) {
        res.status(500).json({messae: "Failed to Delete Blog Data", error:error.messae})
    }
})

export default router