"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="AURA FIT"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="font-extrabold text-xs text-blue-600">
            AURA FIT
          </span>
        </Link>

        {/* Navegação */}
        <nav className="space-x-4 text-white hidden md:flex">
          <Link href="/">INÍCIO</Link>
          <Link href="/planos">PLANOS</Link>
        </nav>

        {/* Botão */}
        <a
          href="#contato"
          className="header-btn text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition"
        >
          MATRICULE-SE
        </a>
      </div>
    </header>
  )
}
