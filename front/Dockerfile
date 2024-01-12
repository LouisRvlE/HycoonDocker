FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

RUN rm -r node_modules

CMD ["serve", "-s", "/app/dist", "-l", "5173"]
