import mongoose from 'mongoose';

const MensagemSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  mensagem: String
}, { timestamps: true });

export default mongoose.model('Mensagem', MensagemSchema);
