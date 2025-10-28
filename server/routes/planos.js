import express from 'express';
import Plano from '../models/Plano.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const planos = await Plano.find().sort({ preco: 1 });
  res.json(planos);
});

router.post('/', async (req, res) => {
  const plano = new Plano(req.body);
  await plano.save();
  res.status(201).json(plano);
});

export default router;
