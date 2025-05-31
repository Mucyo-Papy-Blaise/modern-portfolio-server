import express,{Request,Response} from 'express'
import env from './config/env'
import connectdb from './config/dbConnect'
import cors from 'cors'
import educationRoutes from './Routers/education.routers'
import experienceRoutes from './Routers/experience.router'
import profileRoutes from './Routers/profile.routers'
import projectRoutes from './Routers/project.router'
import serviceRoutes from './Routers/service.router'
import blogRoutes from './Routers/blog.router'
import skillRoutes from './Routers/skill.router'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'https://mucyo-papy-blaise.netlify.app'],
    methods: ['GET','POST','PUT','DELETE','PATCH']
}))

app.use('/education', educationRoutes)
app.use('/experience', experienceRoutes)
app.use('/profile', profileRoutes)
app.use('/project', projectRoutes)
app.use('/service', serviceRoutes)
app.use('/blog', blogRoutes)
app.use('/skill', skillRoutes)

const PORT = env.port
app.listen(PORT, async()=>{
    try {
        await connectdb()
        console.log(`Server is running on PORT ${PORT}`)
    } catch (error) {
        console.log('Error in server Running')
    }
})