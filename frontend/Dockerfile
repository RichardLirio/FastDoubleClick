# Imagem base
FROM node:latest

# Diretório de trabalho
WORKDIR /app

# Copiar dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Iniciar o Next.js
CMD ["npm", "run", "dev"]
