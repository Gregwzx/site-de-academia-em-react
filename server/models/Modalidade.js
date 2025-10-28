import mongoose from 'mongoose';

const ModalidadeSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  imagem: String
}, { timestamps: true });

export default mongoose.model('Modalidade', ModalidadeSchema);
