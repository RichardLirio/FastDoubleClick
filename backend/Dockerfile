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

# Expor a porta 3333
EXPOSE 3333

# Comando para iniciar
CMD ["npm", "run", "dev"]
