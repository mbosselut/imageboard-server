const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const logging = () => console.log('Starting up on port ', port);

app.listen(port, logging);
