import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import planosRouter from './routes/planos.js';
import modalidadesRouter from './routes/modalidades.js';
import contatoRouter from './routes/contato.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/undergym';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro MongoDB:', err.message));

app.use('/api/planos', planosRouter);
app.use('/api/modalidades', modalidadesRouter);
app.use('/api/contato', contatoRouter);

app.get('/api/ping', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
