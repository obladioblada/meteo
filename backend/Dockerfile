FROM node:10-slim
WORKDIR /usr/local/runme/meteo
COPY app.js app.js
COPY server.js server.js
COPY package.json package.json
RUN npm install
CMD [ "npm", "run", "start"]

