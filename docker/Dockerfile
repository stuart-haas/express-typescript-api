FROM node:14-alpine

WORKDIR /home/node/api

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn global add nodemon

RUN yarn global add typeorm

EXPOSE 5000