require('dotenv').config();

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
};

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
const accessTokenSecret = process.env.ACCES_TOKEN_SECRET;
const accessTokenExpiryTime = process.env.ACCESS_TOKEN_LIMIT;

const corsOption = {
  origin: '*',
  // allowedHeaders: '',
  // exposedHeaders: '',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

module.exports = {
  port,
  mongoUrl,
  accessTokenSecret,
  accessTokenExpiryTime,
  mongooseConfig,
  corsOption,
};
