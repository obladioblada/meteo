FROM node:16.10-slim as build
WORKDIR /app
COPY *.js .
COPY package.json package.json
RUN npm install
CMD [ "npm", "run", "start"]

