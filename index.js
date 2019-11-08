const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const db = require('./db');
const Image = require('./image/model');
const imageRouter = require('./image/router');

app.use(imageRouter);
const logging = () => console.log('Starting up on port ', port);

app.listen(port, logging);
