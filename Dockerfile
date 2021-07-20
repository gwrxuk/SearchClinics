FROM node:lts-buster-slim
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
