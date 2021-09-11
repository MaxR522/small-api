const Car = require('../../models/car');

/**
 * To populate cars DB,
 * - Delete all cars inside mongoDB to avoid duplication,
 * - insert new data inside mongoDB
 */
module.exports = (req, res) => {
  const carData = [
    {
      brand: 'Mazda',
      photo:
        'https://images.pexels.com/photos/9070626/pexels-photo-9070626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      brand: 'Ferari',
      photo:
        'https://images.pexels.com/photos/3954426/pexels-photo-3954426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      brand: 'Mercedes',
      photo:
        'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      brand: 'Mitsubishi',
      photo:
        'https://images.pexels.com/photos/7549104/pexels-photo-7549104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      brand: 'Lamborghini',
      photo:
        'https://images.pexels.com/photos/5288699/pexels-photo-5288699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      brand: 'Ford',
      photo:
        'https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];

  Car.insertMany(carData, (error) => {
    if (error) {
      throw new Error('Error on inserting carData');
    }

    return res.status(200).json({
      message: 'Cars data populated',
      carData,
    });
  });
};
