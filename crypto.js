require('dotenv').config();
const apiKey = process.env.API_KEY;
const url = 'https://api.nomics.com/v1/currencies/ticker?';
const interval = '1h,1d';

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Current price/data
router.get('/api/:crypto', (req, res) => {
    console.log('fetched')
  fetch(`${url}key=${apiKey}&ids=${req.params.crypto}&interval=${interval}`)
  .then(response => response.json())
  .then(jsonResponse => {
      console.log(jsonResponse)
      res.json(jsonResponse)})
  .catch(err => res.json(err))
}) 

// Historical prices
router.get('/api/:crypto/historical', (req, res) => {
    fetch(`https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${req.params.crypto}&start=2021-01-01T00%3A00%3A00Z`)
    .then(response => response.json())
    .then(jsonResponse => {
        console.log(jsonResponse)
        res.json(jsonResponse)})
    .catch(err => {
        console.log('error')
        console.log(err)
        res.json(err)})
})

module.exports = router;