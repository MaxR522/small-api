const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (error, user) => {
    if (error) throw new Error(error);

    if (!user) {
      return res.status(404).json({
        message: `User with ID: ${email} not found`,
      });
    }

    if (user) {
      bcrypt.compare(password, user.password, async (error, isMatch) => {
        if (error) throw new Error(error);

        if (!isMatch) {
          return res.status(401).json({
            message: 'email or password mismatch',
          });
        }

        const payload = {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        };

        if (isMatch) {
          const token = await jwt.sign(payload, config.accessTokenSecret, {
            expiresIn: config.accessTokenExpiryTime,
          });

          return res.status(200).json({
            message: 'Login success',
            user,
            'access-token': token,
          });
        }
      });
    }
  });
};
