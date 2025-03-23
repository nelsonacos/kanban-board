FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173 3000
CMD ["sh", "-c", "npm run backend & npm run dev"]