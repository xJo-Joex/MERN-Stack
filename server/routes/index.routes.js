import { Router } from "express";
import {pool} from "../db.js"
const router = Router();

router.get("/ping",async (req, res)=>{
  const [pong ]= await pool.query('SELECT 1+1');
  res.json(pong)
})

export default router;