import express, {Request, Response} from "express";
import education from "../models/education.models";

const router = express()
router.use(express.json())

router.post('/', async(req: Request, res:Response)=>{
    try {
        const { startYear, endYear, program, school, degree } = req.body
        await education.create({
            startYear: new Date(startYear),
            endYear: new Date(endYear),
            program,
            school,
            degree,
        })
        res.status(201).json({message:'education created successfully'})
    } catch (error: any) {
        res.status(500).json({message:"Failed to create Education", error: error.message})
    }
})

router.get('/',async(req:Request, res:Response)=>{
    try {
        const educations = await education.find()
        res.status(201).json(educations)
    } catch (error: any) {
        res.status(500).json({message:"Failed to Fetch education Data", error:error.message})
    }
})

router.delete('/:id',async(req: Request, res: Response)=>{
    try {
        const {id} = req.params
        await education.findOneAndDelete({_id: id})
        res.status(201).json({message:'Education deleted successfully!'})
    } catch (error: any) {
        res.status(500).json({message:'Failed to Delete Education!', error:error.message})
    }
})

export default router