const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
