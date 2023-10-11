FROM node:18

WORKDIR  .

COPY package.json ./

COPY tsconfig.json ./

COPY src  ./src

RUN npm install

RUN npm  run build

ENV NODE_ENV=production

CMD [ "node", "./dist/index.js" ]