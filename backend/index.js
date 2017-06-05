const express = require('express');
const json = require('express-json');

const app = express()
  .use(json())
  .use(function (req, res) {
    res.json({
        helloWorld: 'Hello World!'
    });
  })
  .listen(3000);
