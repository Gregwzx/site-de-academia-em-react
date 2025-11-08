"use client";

import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import Planos from "./components/Planos";
import Modalidades from "./components/Modalidades";
import DepoimentosFloatings from "./components/DepoimentosFloating";
import PhotoCarousel from "./components/Galeria";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    // MOUSE TRAIL LASER
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const trails: { x: number; y: number; alpha: number; vx: number; vy: number }[] = [];

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      trails.forEach((t, i) => {
        ctx!.strokeStyle = `rgba(26,115,255,${t.alpha})`;
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.moveTo(t.x - t.vx, t.y - t.vy);
        ctx!.lineTo(t.x, t.y);
        ctx!.stroke();

        t.alpha -= 0.02;
        if (t.alpha <= 0) trails.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const vx = Math.random() * 20 - 10;
      const vy = Math.random() * 20 - 10;
      trails.push({ x: e.clientX, y: e.clientY, alpha: 1, vx, vy });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div className="home-root">
      {/* HERO */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="z-10 max-w-3xl mx-auto p-6 text-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-blue-600 neon-title">
            AURA FIT
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl">AURA + EGO</p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#planos"
              className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600/10 transition"
            >
              Matricule-se
            </a>
            <a
              href="#modalidades"
              className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600/10 transition"
            >
              Ver Modalidades
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* ESCOLHAS SAUDÁVEIS */}
      <motion.section
        id="destaques"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 neon-title leading-tight">
              ESCOLHAS <br /> MAIS SAUDÁVEIS
            </h2>
            <p className="text-white text-lg max-w-xl">
              Na Aura Fit, cada treino é planejado para farma aura. Nosso foco é
              garantir sua aura e ego — com programas personalizados, equipamentos
              modernos e acompanhamento de profissionais qualificados.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/woman.png"
              alt="Instrutora Aura Fit"
              className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </motion.section>

      {/* DEPOIMENTOS */}
      <DepoimentosFloatings />

      {/* GALERIA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Galeria</h2>
        <PhotoCarousel />
      </motion.section>

      {/* MODALIDADES */}
      <Modalidades />

      {/* PLANOS */}
      <Planos />

      {/* BANNER FINAL (VÍDEO) */}
      <motion.section
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <video
          src="/footer.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center text-white max-w-3xl p-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold neon-title">
            VEM FAZER PARTE DA <span className="text-blue-500">AURA</span>
          </h2>
          <p className="mt-4 text-xl md:text-2xl">
            Farme aura conosco e se torne{" "}
            <span className="text-blue-500 neon-title">lendário</span>!
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
