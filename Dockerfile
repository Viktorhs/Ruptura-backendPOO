FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./app

RUN npx prisma generate

EXPOSE 5000

CMD [ "npm", "run", "docker:dev:create" ]
