const Car = require('../../models/car');

module.exports = (req, res) => {
  const _id = req.params.id;

  Car.findOne({ _id: _id }, (error, car) => {
    if (error) throw new Error(error);

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
