var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var routes = require('./api')(app)

app.use(bodyParser.json({ type: 'applictaion/json' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
