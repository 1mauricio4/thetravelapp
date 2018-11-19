var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    greeting: 'Hello, Welcome to the USA!',
    countryInfo: {
      countryName: 'USA',
      population: '330,000',
      capital: 'Washington D.C.',
      president: 'Sunny D'
    }
  };
  res.json(data);
});

module.exports = router;
