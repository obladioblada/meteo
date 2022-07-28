const express = require('express')
const app = express()

app.get('/api/status', function (req, res) {
  res.send('ok')
})

app.get('/api/meteo', function (req, res) {
  res.send('Hello World')
})


module.exports = app