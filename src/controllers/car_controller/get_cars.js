const Car = require('../../models/car');

module.exports = async (req, res) => {
  try {
    const cars = await Car.find({});
    return res.status(200).json({ cars });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
