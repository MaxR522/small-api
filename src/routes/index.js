const Express = require('express');
const CarRoutes = require('./car/car.routes');
const UserRoutes = require('./user/user.routes');

const routes = Express.Router();

routes.use('/users', UserRoutes);
routes.use('/cars', CarRoutes);

module.exports = routes;
