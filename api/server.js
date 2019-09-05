const express = require('express');
const helmet = require('helmet');


const db = require('../data/db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

console.log('environment', process.env.NODE_ENV)

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;
