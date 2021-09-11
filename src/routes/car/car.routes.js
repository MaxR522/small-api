const Express = require('express');
const GetCar = require('../../controllers/car_controller/get_cars');
const PopulateCar = require('../../controllers/car_controller/populate_cars');
const CreateCar = require('../../controllers/car_controller/create_cars');
const GetOneCar = require('../../controllers/car_controller/get_one_cars');

const fieldValidators = require('../../middlewares/validators/field_validators');
const checkFieldValidators = require('../../middlewares/validators/check_field_validators');
const verifyJwt = require('../../middlewares/authorization/verify_jwt');

const router = Express.Router();

router.get('/', GetCar);
router.get('/populate', PopulateCar);
router.post(
  '/',
  verifyJwt,
  fieldValidators('create_car'),
  checkFieldValidators,
  CreateCar,
);
router.get('/:id', GetOneCar);

module.exports = router;
