const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Home Page',
  });
});

const userRoutes = require('./user');
const itemRoutes = require('./item');

routes.use('/items', itemRoutes);
routes.use('/users', userRoutes);

module.exports = routes;
