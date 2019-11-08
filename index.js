const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const imageRouter = require('./image/router');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./auth/router');
const userRouter = require('./user/router');

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(authRouter);
app.use(imageRouter);
app.use(userRouter);

const logging = () => console.log('Starting up on port ', port);

app.listen(port, logging);
