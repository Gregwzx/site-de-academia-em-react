import express from 'express';
import Modalidade from '../models/Modalidade.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const mod = await Modalidade.find();
  res.json(mod);
});

router.post('/', async (req, res) => {
  const m = new Modalidade(req.body);
  await m.save();
  res.status(201).json(m);
});

export default router;
