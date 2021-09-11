const { body } = require('express-validator');

module.exports = (route) => {
  switch (route) {
    case 'signup':
      return [
        body('fullname', 'fullname must be string & mandatory')
          .isString()
          .notEmpty(),
        body('email', 'email must be valid & mandatory').isEmail().notEmpty(),
        body('password', 'password cannot be blank').notEmpty(),
        body('password', 'password is too short, at least 6 chars').isLength({
          min: 6,
        }),
        body(
          'password',
          'password must contain digit, lower case and upper case letter',
        ).custom((value) => {
          const passwordRgxp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
          return passwordRgxp.test(value);
        }),
      ];

    case 'login':
      return [
        body('email', 'email cannot be blank').isString().notEmpty(),
        body('password', 'password cannot be blank').isString().notEmpty(),
      ];

    case 'create_car':
      return [
        body('brand', 'brand cannot be blank & must be string')
          .isString()
          .notEmpty(),
        body('photo', 'photo cannot be blank & must be string')
          .isString()
          .notEmpty(),
      ];

    case 'create_comment':
      return [
        body('author', 'author cannot be blank & must be string')
          .isString()
          .notEmpty(),
        body('content', 'content cannot be blank & must be string')
          .isString()
          .notEmpty(),
        body('carId', 'carId cannot be blank & must be string')
          .isString()
          .notEmpty(),
      ];

    default:
      return [];
  }
};
