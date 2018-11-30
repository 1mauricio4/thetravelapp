var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient; //connect to database (mLab)
require('dotenv').config();

var db
MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err);
  db = database.db('thetravelapp');
});

router.get('/countries/:countryCode', (req, res, next) => {
  db.collection('countryData').find({'countryCode': req.params.countryCode}).toArray((err, result) => {
    res.json(result);
  });
});

module.exports = router;
