import express,{Request, Response} from 'express'
import experience from '../models/experience.modules'

const router = express()
router.use(express.json())

router.post('/',async(req: Request, res:Response)=>{
    try {
        const {company,role,employment,startDate,endDate,description} =  req.body
        await experience.create({
            company,
            role,
            employment,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            description,
        })
    res.status(201).json({message:'experience created successfully!'})
    } catch (error: any) {
        res.status(500).json({message:'Failed to create experience!', error:error.message})
    }
})

router.get('/', async(req: Request, res: Response)=>{
    try {
        const experiences = await experience.find()
        res.status(201).json(experiences)
    } catch (error: any) {
        res.status(500).json({message:"Failed to Fetch experiences Data", error:error.message})
    }
})

export default router