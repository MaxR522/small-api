const Car = require('../../models/car');

module.exports = (req, res) => {
  const _id = req.params.id;

  Car.findOne({ _id: _id }, (error, car) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }

    if (!car) {
      return res.status(404).json({
        message: `Car ID ${_id} not found`,
      });
    }

    if (car) {
      return res.status(200).json({ car });
    }
  });
};
