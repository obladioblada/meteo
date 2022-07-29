const express = require('express')
const axios = require('axios').default;
var cors = require('cors');
const app = express()
const openweathermapApiUrl = 'https://api.openweathermap.org/data/2.5/forecast'
const iconUrl = 'https://openweathermap.org/img/wn/';

const apiKey = 'f4c41534b03ad0ee7587b5f76d4b711f'

app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:90']
}));

app.get('/api/status', function (req, res) {
  res.send('ok')
})

app.get('/api/meteo', function (req, res) {
  const location = req.query.location;
  if (!location) {
    return res.status(400).send('Missing location parameter');
  }
  axios.get(openweathermapApiUrl, {
    params: {
      q: location,
      appid: apiKey,
      units: 'metric'
    }
  }).then(function (response) {
    return res.send(JSON.stringify(parseForecastResponse(response.data)));
  }).catch(function (error) {
    console.log(error);
    return res.status(500).send(error);
  })
})


function parseForecastResponse(data) {
  var parsed = {};
  var weatherPerTime = [];
  if (data.list) {
    data.list.forEach((time, index) => {
      const temp = parseInt(time.main.temp);
      const weatherDescription = time.weather[0].description;
      //set current weather approximation
      if (index === 0) {
        var city = {};
        city.name = data.city.name;
        city.temp = temp;
        city.weatherDescription = time.weather[0].description;
        city.icon = `${iconUrl}${time.weather[0].icon}@2x.png`;
        parsed.city = city;
      }
      var timeItem = {};
      timeItem.temp = temp;
      timeItem.weatherDescription = weatherDescription;
      timeItem.icon = `${iconUrl}${time.weather[0].icon}.png`;
      timeItem.dt_txt = time.dt_txt
      weatherPerTime.push(timeItem);
    })
    parsed.list = weatherPerTime;
  }

  return parsed;
}


module.exports = app