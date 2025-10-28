import mongoose from 'mongoose';

const PlanoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String },
  beneficios: { type: [String], default: [] },
  destaque: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Plano', PlanoSchema);
