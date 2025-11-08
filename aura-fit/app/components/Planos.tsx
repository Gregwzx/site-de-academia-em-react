"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface Plano {
  _id: number;
  nome: string;
  preco: number;
  descricao: string;
  beneficios: string[];
}

export default function Planos() {
  const [planos, setPlanos] = useState<Plano[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    axios
      .get(`${apiUrl}/planos`)
      .then((res) => setPlanos(res.data))
      .catch(() =>
        setPlanos([
          {
            _id: 1,
            nome: "Básico",
            preco: 79,
            descricao: "Acesso à academia",
            beneficios: ["Musculação"],
          },
          {
            _id: 2,
            nome: "Premium",
            preco: 129,
            descricao: "Acesso + aulas",
            beneficios: ["Musculação", "Aulas"],
          },
          {
            _id: 3,
            nome: "VIP",
            preco: 199,
            descricao: "Tudo incluso",
            beneficios: ["Tudo"],
          },
        ])
      );
  }, []);

  return (
    <div id="planos" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Planos</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {planos.map((p) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="font-bold text-xl text-white">
              {p.nome} — R$ {p.preco}
            </h3>
            <p className="mt-2 text-white">{p.descricao}</p>

            <ul className="mt-3 list-disc ml-5">
              {(p.beneficios || []).map((b, i) => (
                <li key={i} className="text-white">
                  {b}
                </li>
              ))}
            </ul>

            <button className="header-btn mt-4">Quero esse</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
