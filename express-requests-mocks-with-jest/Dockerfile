FROM node:slim
WORKDIR /usr/app
COPY package*.json ./
RUN npm i --silent --progress=false
COPY . .
CMD npm run start
