const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, config.accessTokenSecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ error });
      }

      if (decoded) {
        req.userData = decoded;
        req.token = token;

        next();
      }
    });
  } else {
    return res.status(401).json({
      message: 'This action require to login',
    });
  }
};
