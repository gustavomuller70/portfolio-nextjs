# ETAPA 1: Construcción (Builder)
# Usamos Node 22 porque Astro 6 lo exige
FROM node:22-alpine AS builder
WORKDIR /app

# 1. Copiamos los archivos de configuración
COPY package*.json ./
COPY astro.config.mjs ./

# 2. Instalamos con la bandera de compatibilidad para evitar el ERESOLVE
RUN npm install --legacy-peer-deps

# 3. Copiamos el resto del código
COPY . .

# 4. Construimos el sitio estático
RUN npm run build

# ETAPA 2: Producción (Servidor Web Nginx)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
