"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilidad para fusionar clases de Tailwind limpiamente
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/#sobre-mi" },
  { name: "Proyectos", href: "/#proyectos" },
  { name: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar el scroll para cambiar el fondo del Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-md border-gray-800 shadow-lg py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="relative z-50 flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-gray-900 group-hover:rotate-12 transition-transform">
            GM
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Gustavo<span className="text-emerald-400">Müller</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a // <-- CAMBIADO A ETIQUETA <a>
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://github.com/gustavomuller70"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-medium text-white transition-all backdrop-blur-sm"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay (Animado con Framer Motion) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <a // <-- CAMBIADO A ETIQUETA <a>
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-gray-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-800 my-2"></div>
              <a
                href="https://github.com/gustavomuller70"
                className="w-full py-3 bg-gray-800 text-center rounded-lg text-white font-medium"
              >
                Ver GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
