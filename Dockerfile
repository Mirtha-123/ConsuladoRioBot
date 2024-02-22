# Usa una imagen base de Node.js
FROM node:21

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que tu aplicación escucha
EXPOSE 3000

# Define la variable de entorno para el puerto
ENV PORT=3000

# Inicia tu aplicación
CMD ["npm", "start"]
