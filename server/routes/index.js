var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient; //connect to database (mLab)
var geoip = require('geoip-lite');
const fetch = require('node-fetch');

require('dotenv').config();

var db
MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err);
  db = database.db('thetravelapp');
});

// @route  GET /countries
// @desc   Get user's IP and return appropriet info
// @access Public
router.get('/countries', (req, res, next) => {
// Uncomment this when ready for deployment;
  // var ip = req.connection.remoteAddress;
  var ip = '207.97.227.239';
  var geo = geoip.lookup(ip);

  var data = {};
  data.geo = geo;
  db.collection('countryData').find({'countryCode': geo.country }).toArray((err, result) => {
    data.result = result;
    console.log(data);
    res.json(data);
  });
});

// @route  GET /news_api/:countryCode
// @desc   Get current news from api
// @access Public
router.get('/news_api/:countryCode', (req, res) => {
  let country = req.params.countryCode;
  fetch(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => res.json(data));
});

// @route  GET
// @desc   Get
// @access Public
router.get('/weather_api/:city', (req, res) => {
  let city = req.params.city;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.WEATHER_API}`)
    .then(response => response.json())
    .then(data => res.json(data));
})

module.exports = router;
