import express,{Request,Response} from 'express'
import env from './config/env'
import connectdb from './config/dbConnect'
import education from './models/education.models'
import experience from './models/experience.modules'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET','POST','PUT','DELETE','PATCH']
}))

app.post('/education', async(req: Request, res:Response)=>{
    try {
       const {startYear,endYear,program,school,degree} = req.body
       await education.create({
        startYear,
        endYear,
        program,
        school,
        degree,
       })
       res.status(201).json({message:'Education uploaded successfully!'})
    } catch (error: any) {
        res.status(500).json({message:"failed to create education",error:error.essage})
    }
})

app.get('/education', async(req: Request, res:Response)=>{
    try {
        const educations =  await education.find()
        res.status(201).json(educations)
    } catch (error) {
        res.status(500).json({message:'Failed to fetch education data'})
    }
})

app.post('/experience', async (req:Request, res:Response)=>{
    try {
       const {company,role,employment,startDate,endDate,description} = req.body
       await experience.create({
        company,
        role,
        employment,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        description
       })
       res.status(201).json({message:'experience uploaded successfully!'})
    } catch (error: any) {
        console.log('Failed to create experience', error.message)
        res.status(500).json({message:'failed to create experience', error: error.message})
    }
})

app.get('/experience', async (req:Request, res:Response)=>{
    try {
        const experiences = await experience.find()
        res.status(201).json(experiences)
    } catch (error) {
        res.status(500).json({message: 'Failed to Fetch experiences Data'})
    }
})

const PORT = env.port
app.listen(PORT, async()=>{
    try {
        await connectdb()
        console.log(`Server is running on PORT ${PORT}`)
    } catch (error) {
        
    }
})