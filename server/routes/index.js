var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let country = {
    countryName: 'USA',
    population: '330,000',
    capital: 'Washington D.C.',
    president: 'Sunny D'
  };

  res.json(country);
});

module.exports = router;
