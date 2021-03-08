const express = require('express');
const app = express();
const cryptoAPI = require('./crypto');

const cors = require('cors');
const PORT = process.env.PORT || 5000;

const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Middleware
app.use(cors());

app.use('/', cryptoAPI);

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })
  
app.listen(PORT, () => console.log('Server started'));
