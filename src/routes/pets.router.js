import { Router } from 'express';
import { PetModel } from '../models/pet.schema.js';
const router = Router();
router.get('/', async (_req,res)=> {
  const docs = await PetModel.find().limit(100).lean();
  res.json({ count: docs.length, items: docs });
});
export default router;
