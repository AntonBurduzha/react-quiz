const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json({
    "Auth":"Logged",
    "Language":"EN"
  });
});

module.exports = app;