FROM node:16.10-slim as build
WORKDIR /app

RUN npm install -g @angular/cli@14.1.0

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/meteo-frontend /usr/share/nginx/html
