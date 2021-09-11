const Car = require('../models/car');

module.exports = (req, res, next) => {
  const { carId } = req.body;

  Car.findOne({ _id: carId }, (error, car) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }

    if (!car) {
      return res.status(404).json({
        message: `car with ID: ${carId} not found`,
      });
    }

    if (car) {
      next();
    }
  });
};
