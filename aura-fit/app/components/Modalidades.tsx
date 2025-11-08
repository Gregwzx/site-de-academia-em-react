"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface Modalidade {
  _id: number;
  nome: string;
  descricao: string;
}

export default function Modalidades() {
  const [mods, setMods] = useState<Modalidade[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    axios
      .get<Modalidade[]>(`${apiUrl}/modalidades`)
      .then((res) => setMods(res.data))
      .catch(() =>
        setMods([
          { _id: 1, nome: "Musculação", descricao: "Treino com pesos" },
          { _id: 2, nome: "CrossFit", descricao: "Alta intensidade" },
          { _id: 3, nome: "Pilates", descricao: "Flexibilidade e core" },
        ])
      );
  }, []);

  return (
    <div id="modalidades" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Modalidades</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {mods.map((m: Modalidade) => (
          <motion.div
            key={m._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-blue-700/40"
          >
            <h3 className="font-bold text-blue-600">{m.nome}</h3>
            <p className="mt-2 text-white">{m.descricao}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
