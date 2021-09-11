const Express = require('express');
const CreateComment = require('../../controllers/comment_controller/create_comment');
const verifyJwt = require('../../middlewares/authorization/verify_jwt');

const fieldValidators = require('../../middlewares/validators/field_validators');
const checkFieldValidators = require('../../middlewares/validators/check_field_validators');
const checkCarExists = require('../../middlewares/check_car_exists');

const router = Express.Router();

router.post(
  '/',
  verifyJwt,
  fieldValidators('create_comment'),
  checkFieldValidators,
  checkCarExists,
  CreateComment,
);

module.exports = router;
