"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import ft1 from "@/public/fts/ft1.png"
import ft2 from "@/public/fts/ft2.png"
import ft3 from "@/public/fts/ft3.png"
import ft4 from "@/public/fts/ft4.png"

export default function DepoimentosFloatings() {
  const fotos = [
    { src: ft1, alt: "Depoimento 1" },
    { src: ft2, alt: "Depoimento 2" },
    { src: ft3, alt: "Depoimento 3" },
    { src: ft4, alt: "Depoimento 4" },
  ]

  const floatVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
    },
  }

  return (
    <div className="relative py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-700 text-center mb-24">
          O que nossos alunos dizem
        </h2>

        <div className="flex flex-wrap gap-20 justify-center items-center">
          {fotos.map((foto, index) => (
            <motion.div
              key={index}
              className="relative"
              style={{
                background: "#1a73ff",
                padding: "8px",
                borderRadius: "32px",
                boxShadow:
                  "0 0 40px rgba(26,115,255,0.6), 0 0 70px rgba(26,115,255,0.35)",
              }}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.9,
              }}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={400}
                height={400}
                className="rounded-3xl object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
