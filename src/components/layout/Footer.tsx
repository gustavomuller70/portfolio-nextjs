// Borramos la línea de "si" y usamos FontAwesome para todo
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Le añadimos el id="contacto" para el Navbar
    <footer className="border-t border-gray-900 bg-gray-950 py-12 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Lado Izquierdo: Marca y Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            Gustavo<span className="text-emerald-400">Müller</span>
          </span>
          <p className="text-sm">
            © {currentYear} Todos los derechos reservados.
          </p>
        </div>

        {/* Centro: Orgullo de Sysadmin/Dev */}
        <div className="text-sm font-mono text-gray-500 text-center">
          Desplegado en <span className="text-orange-400">Proxmox</span> • Construido con <span className="text-white">Astro</span>
        </div>

        {/* Lado Derecho: Enlaces Sociales (Contacto) */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors p-3 hover:bg-gray-900 rounded-xl border border-transparent hover:border-gray-800"
          >
            <FaGithub className="text-xl" /> {/* <-- Cambiado */}
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors p-3 hover:bg-gray-900 rounded-xl border border-transparent hover:border-gray-800"
          >
            <FaLinkedin className="text-xl" /> {/* <-- Cambiado */}
          </a>
          <a
            href="mailto:tu-correo@ejemplo.com"
            aria-label="Correo Electrónico"
            className="hover:text-emerald-400 transition-colors p-3 hover:bg-gray-900 rounded-xl border border-transparent hover:border-gray-800"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
