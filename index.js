const express = require('express');
const app = express();
const cryptoAPI = require('./crypto');

const cors = require('cors');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

app.use('/', cryptoAPI);

app.listen(PORT, () => console.log('Server started'));
