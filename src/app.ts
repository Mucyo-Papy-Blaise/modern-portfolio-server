import express from 'express'
import env from './config/env'
import connectdb from './config/dbConnect'

const app = express()
app.use(express.json())

const PORT = env.port
app.listen(PORT, async()=>{
    try {
        await connectdb()
        console.log(`Server is running on PORT ${PORT}`)
    } catch (error) {
        
    }
})