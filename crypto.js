require('dotenv').config();
const apiKey = process.env.API_KEY;
const url = 'https://api.nomics.com/v1/currencies/ticker?';
const interval = '1h,1d';

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Current price/data
router.get('/:crypto', (req, res) => {
    console.log('fetched')
  fetch(`${url}key=${apiKey}&ids=${req.params.crypto}&interval=${interval}`)
  .then(response => response.json())
  .then(jsonResponse => {
      console.log(jsonResponse)
      res.json(jsonResponse)})
  .catch(err => console.log(err))
}) 

// Historical prices
router.get('/:crypto/historical', (req, res) => {
    fetch(`https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${req.params.crypto}&start=2018-04-14T00%3A00%3A00Z`)
    .then(response => response.json())
    .then(jsonResponse => {
        console.log(jsonResponse)
        res.json(jsonResponse)})
    .catch(err => console.log(err))
})

module.exports = router;