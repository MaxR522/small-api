const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res) => {
  const { fullname, email, password } = req.body;

  const newUser = new User({
    fullname,
    email,
    password,
  });

  newUser.save(async (error) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }

    const payload = {
      id: newUser._id,
      fullname: newUser.fullname,
      email: newUser.email,
    };

    const accessToken = await jwt.sign(payload, config.accessTokenSecret, {
      expiresIn: config.accessTokenExpiryTime,
    });

    return res.status(201).json({
      message: 'User created successfully',
      user: newUser,
      'access-token': accessToken,
    });
  });
};
