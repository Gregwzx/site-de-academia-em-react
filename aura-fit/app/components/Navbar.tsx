"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-white">
          Aura <span className="text-blue-600 neon">Fit</span>
        </Link>

        <div className="hidden md:flex gap-8 text-white text-sm uppercase font-semibold">
          <a href="#inicio" className="hover:text-blue-600 transition">Início</a>
          <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
          <a href="#treinos" className="hover:text-blue-600 transition">Treinos</a>
          <a href="#planos" className="hover:text-blue-600 transition">Planos</a>
          <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
        </div>
      </div>
    </motion.nav>
  );
}
