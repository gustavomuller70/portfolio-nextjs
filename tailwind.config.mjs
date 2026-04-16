/** @type {import('tailwindcss').Config} */
export default {
    // Esta línea es clave: le dice a Tailwind qué archivos escanear
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [],
}