var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient; //connect to database (mLab)
var geoip = require('geoip-lite');
require('dotenv').config();

var db
MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err);
  db = database.db('thetravelapp');
});

router.get('/countries/:countryCode', (req, res, next) => {
// Uncomment this when ready for deployment;
  // var ip = '207.97.227.239';
  // var geo = geoip.lookup(ip);

  db.collection('countryData').find({'countryCode': req.params.countryCode}).toArray((err, result) => {
    res.json(result);
  });
});

module.exports = router;
