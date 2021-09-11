const Car = require('../../models/car');

module.exports = (req, res) => {
  const { brand, photo } = req.body;

  const car = new Car({
    brand,
    photo,
  });

  car.save((error) => {
    if (error) throw new Error(error);

    return res.status(201).json({
      message: 'car created successfully',
      car,
    });
  });
};
