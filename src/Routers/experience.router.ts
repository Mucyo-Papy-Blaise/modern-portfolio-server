import express,{Request, Response} from 'express'
import experience from '../models/experience.modules'

const router = express()
router.use(express.json())

router.post('/',async(req: Request, res:Response)=>{
    try {
        const {company,role,employment,startDate,endDate,current,description} =  req.body
        const experienceData: any = {
            company,
            role,
            employment,
            startDate: new Date(startDate),
            current,
            description
        }

        if(!current || endDate){
            experienceData.endDate = new Date(endDate)
        }
        await experience.create(experienceData)
        res.status(201).json({message:'Experience Created Successfully!'})

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