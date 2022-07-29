# METEO

#APPLICATION

### With docker

`docker compose up --build`

Application served on port `90`( change from docker file if needed)

### Without docker
##### Frontend
go to `frontend` directory  run `ng serve` (port 4200)

##### Backend
go to `backend` directory  run `npm start` (port 3000)

#TEST
go to `backend` directory  run `npm test`

#NODE API 

####@GET
`http://localhost:3000/api/meteo?location=<location>`


