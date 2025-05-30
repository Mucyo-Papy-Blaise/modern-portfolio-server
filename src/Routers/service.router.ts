import express, { Request, Response } from "express";
import service from "../models/service.models";

const router = express();
router.use(express.json());

router.post("/", async (req: Request, res: Response) => {
  try {
    const { icon, serviceName, description, features } = req.body;

    await service.create({
      icon,
      serviceName,
      description,
      features,
    });
    res.status(201).json({ message: "Service Created Successfully!" });
  } catch (error: any) {
    res.status(500).json({message:'Failed to Create Service!'})
  }
});

router.get('/', async(req: Request, res: Response)=>{
  try {
    const services = await service.find()
    res.status(201).json({services})
  } catch (error: any) {
    res.status(500).json({message:'Failed to Get Services entery'})
  }
})
export default router