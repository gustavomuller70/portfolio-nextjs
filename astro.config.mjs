import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  vite: {
    server: {
      proxy: {
        // La Magia del Proxy: Astro irá a buscar las imágenes a tu WordPress
        '/wp-content': {
          target: 'http://10.0.50.136:8080',
          changeOrigin: true,
        }
      }
    }
  }
});