const Express = require('express');
const helmet = require('helmet');
const config = require('./src/config');
const mongoose = require('mongoose');

const app = Express();

/**
 * MIDDLEWARES
 */

// Request parser
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Security
app.use(helmet);

/**
 * ROUTES
 */

/**
 * DB CONNEXION
 */

// mongoDB connect
// connection to mongoDB
mongoose.connect(config.mongoUrl, config.mongooseConfig, (error) => {
  if (error) {
    console.error(`${error} ❌`);
    throw error;
  } else {
    console.log(`DATABASE :: mongodb connection @: ${config.mongoUrl} ✅`);
  }
});

module.exports = app;
