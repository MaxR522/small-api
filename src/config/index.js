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

module.exports = {
  port,
  mongoUrl,
  accessTokenSecret,
  accessTokenExpiryTime,
  mongooseConfig,
};
