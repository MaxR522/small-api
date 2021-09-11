const Express = require('express');

const Register = require('../../controllers/user_controller/register');
const Login = require('../../controllers/user_controller/login');

const checkUserDuplication = require('../../middlewares/check_duplicate_user');
const fieldValidators = require('../../middlewares/validators/field_validators');
const checkFieldValidators = require('../../middlewares/validators/check_field_validators');

const router = Express.Router();

router.post(
  '/register',
  fieldValidators('signup'),
  checkFieldValidators,
  checkUserDuplication,
  Register,
);

router.post('/login', fieldValidators('login'), checkFieldValidators, Login);

module.exports = router;
