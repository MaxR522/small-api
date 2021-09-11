const Express = require('express');
const helmet = require('helmet');
const config = require('./src/config');
const mongoose = require('mongoose');
const Routes = require('./src/routes');
const cors = require('cors');

const app = Express();

/**
 * MIDDLEWARES
 */

// Request parser
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// CORS
app.use(cors(config.corsOption));

// Security
app.use(helmet());

/**
 * ROUTES
 */

app.use(Routes);

/**
 * ERROR HANDLER
 */

// Return 404 when not found endpoint
app.use((req, res) => {
  res.status(404).json({
    message: `endpoint ${req.originalUrl} not found`,
  });
});

// Handle syntax error on request
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      message: 'The body of your request is not valid json!',
    });
  }
});

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
