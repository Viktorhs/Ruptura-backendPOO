FROM node:18

WORKDIR /app

COPY package.json .

RUN npm i

COPY . ./app

RUN npx prisma generate

EXPOSE 5000

RUN apt-get update && apt-get install -y wget

CMD [ "npm", "run", "docker:dev:create" ]
