FROM node:16.15.0-alpine3.14

EXPOSE 8080 8081

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
