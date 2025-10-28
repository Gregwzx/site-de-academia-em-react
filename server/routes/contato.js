import express from 'express';
import Mensagem from '../models/Mensagem.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const data = req.body;
  const msg = new Mensagem(data);
  await msg.save();
  res.status(201).json({ ok: true });
});

router.get('/', async (req, res) => {
  const msgs = await Mensagem.find().sort({ createdAt: -1 });
  res.json(msgs);
});

export default router;
