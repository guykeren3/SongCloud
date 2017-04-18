// server.js

// BASE SETUP
// ==============================================

const cors = require('cors');

// ROUTES
// ==============================================

const express = require('express')

const app = express()

app.use(cors({origin: (origin, callback) => {
  callback(null, true);
}, credentials: true}));

app.get('/hello', function (req, res) {
  res.send('hello')
});

app.get('/world', function (req, res) {
  res.send('world')
});

app.get('/a-file', function (req, res) {
  res.sendFile(__dirname + '/foo.txt')
});

app.listen(3000, function () {
  console.log('Listening...')
});
