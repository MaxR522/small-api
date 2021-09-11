const User = require('../models/user');

module.exports = (req, res, next) => {
  const { email } = req.body;

  User.findOne({ email: email }, (error, user) => {
    if (error) {
      return res.status(400).json({ error });
    }

    if (user) {
      return res.status(409).json({
        message: `user with email ${email} already exists`,
      });
    }

    if (!user) {
      next();
    }
  });
};
