"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Mensaje enviado con éxito! Te responderé pronto.");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      alert("Hubo un error al enviar. Por favor, intenta de nuevo o escríbeme directamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900">

      {/* --- NUEVO TÍTULO DE SECCIÓN --- */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-16 flex items-center gap-4"
      >
        <span className="w-12 h-1 bg-emerald-500 rounded-full" />
        Contacto
      </motion.h2>
      {/* ------------------------------ */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm"
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Trabajamos <span className="text-emerald-400">Juntos?</span>
          </h3>
          <p className="text-gray-400">
            Si tienes un proyecto en mente, una oferta de trabajo, o simplemente quieres saludar, envíame un mensaje.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="Ej. Linus Torvalds"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="linus@linux.org"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensaje</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 disabled:bg-gray-700 disabled:text-gray-400 text-gray-950 font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Enviando...</span>
            ) : (
              <>
                <span>Enviar Mensaje</span>
                <FaPaperPlane />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}