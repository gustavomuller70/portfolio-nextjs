"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Variantes para animación en cascada (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo Ambient Lights (Simulando luces de un rack de servidores) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl mix-blend-screen animate-pulse delay-75" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Etiqueta de estatus estilo terminal */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 text-sm font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sistemas Operativos y Desplegados
            </span>
          </motion.div>

          {/* Título Principal de Autoridad (Aterrizado) */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Construyendo la web. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Capa por capa.</span>
          </motion.h1>

          {/* Subtítulo / Propuesta de Valor */}
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Soy Gustavo Müller. Un apasionado por la tecnología que disfruta construyendo sistemas de principio a fin. Desarrollo aplicaciones modernas y gestiono mi propia infraestructura, aprendiendo y aplicando estándares profesionales a proyectos reales.
          </motion.p>

          {/* Botones Call-to-Action (CTA) */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#proyectos"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-1"
            >
              Explorar Proyectos
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 hover:bg-gray-700 backdrop-blur-sm text-white font-bold rounded-lg border border-gray-700 transition-all hover:-translate-y-1"
            >
              Contactar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
