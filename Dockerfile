# ETAPA 1: Construcción (Builder)
FROM node:20-alpine AS builder
WORKDIR /app

# Copiamos solo los archivos de dependencias primero (aprovecha la caché de Docker)
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y construimos el sitio estático
COPY . .
RUN npm run build

# ETAPA 2: Producción (Servidor Web Nginx)
FROM nginx:alpine

# Copiamos los archivos estáticos generados por Astro (carpeta dist) hacia Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto interno 80 de Nginx
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]