"use client";

import { motion } from "framer-motion";
import {
  SiProxmox, SiDocker, SiLinux, SiNextdotjs, SiTailwindcss, SiWordpress, SiGraphql, SiNginx, SiHtml5, SiCss, SiPhp, SiGithub, SiAstro
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const skills = [
  { name: "Proxmox", role: "Infraestructura", icon: SiProxmox, color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
  { name: "Docker", role: "Contenedores", icon: SiDocker, color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
  { name: "Linux", role: "Sysadmin", icon: SiLinux, color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10" },
  { name: "HTML5", role: "Estructura", icon: SiHtml5, color: "text-orange-500", border: "border-orange-600/30", bg: "bg-orange-600/10" },
  { name: "CSS", role: "Diseño", icon: SiCss, color: "text-blue-500", border: "border-blue-600/30", bg: "bg-blue-600/10" },
  { name: "PHP", role: "Backend", icon: SiPhp, color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10" },
  { name: "Java", role: "Backend / OOP", icon: FaJava, color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" },
  { name: "Astro", role: "Static Framework", icon: SiAstro, color: "text-orange-500", border: "border-orange-600/30", bg: "bg-orange-600/10" },
  { name: "Next.js", role: "Framework", icon: SiNextdotjs, color: "text-white", border: "border-gray-600/50", bg: "bg-gray-500/10" },
  { name: "Tailwind CSS", role: "Estilos / UI", icon: SiTailwindcss, color: "text-teal-400", border: "border-teal-500/30", bg: "bg-teal-500/10" },
  { name: "WordPress", role: "Headless CMS", icon: SiWordpress, color: "text-blue-500", border: "border-blue-600/30", bg: "bg-blue-600/10" },
  { name: "Github", role: "Control de versiones", icon: SiGithub, color: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/10" },
  { name: "Nginx", role: "Web Server", icon: SiNginx, color: "text-emerald-500", border: "border-emerald-600/30", bg: "bg-emerald-600/10" },
];

export default function AboutAndStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900 relative">

      {/* Ancla estática e invisible */}
      <div id="sobre-mi" className="absolute -top-32" aria-hidden="true"></div>

      {/* --- NUEVO TÍTULO DE SECCIÓN --- */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-16 flex items-center gap-4"
      >
        <span className="w-12 h-1 bg-emerald-500 rounded-full" />
        Sobre Mí
      </motion.h2>
      {/* ------------------------------ */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Lado Izquierdo: Historia / Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* ... resto del contenido igual ... */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 border border-blue-800/50 text-xs font-bold uppercase tracking-wider mb-2">
            Conoce mi perfil
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Del Homelab a la <br className="hidden md:block" />
            <span className="text-emerald-400">arquitectura moderna.</span>
          </h2>

          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Mi viaje en la tecnología comenzó con la curiosidad de entender qué hay detrás de las pantallas. Esa curiosidad me llevó a montar mis propios servidores, administrar contenedores y gestionar redes desde cero.
            </p>
            <p>
              No me conformo con usar plataformas en la nube preconfiguradas. Creo en el valor del <strong>autoalojamiento (self-hosting)</strong> y en comprender las bases del sistema operativo. Esto me permite escribir código que no solo se ve bien, sino que es altamente eficiente y respetuoso con los recursos del servidor.
            </p>
            <p>
              Actualmente sigo expandiendo mis conocimientos, aplicando estándares de la industria en mis entornos y construyendo proyectos que unen lo mejor de la administración de sistemas (Sysadmin) y el desarrollo Frontend.
            </p>
          </div>
        </motion.div>

        {/* Lado Derecho: Stack Tecnológico */}
        {/* ... igual que antes ... */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-2 gap-4"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-4 rounded-xl border ${skill.border} ${skill.bg} backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-center group`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />
                  <h3 className={`text-lg font-bold ${skill.color}`}>
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs text-gray-400 font-mono tracking-wide uppercase">
                  {skill.role}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}