FROM node:16

WORKDIR /organization

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

ENV PORT=80

CMD ["npm", "run", "start"]