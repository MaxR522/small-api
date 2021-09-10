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

  // Array of Object [{fullname, content}]
  comment: Array,
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
