const userRoutes = require('express').Router();
const userController = require('../controllers/UserController');

userRoutes.get('/', userController.getUsers);
userRoutes.post('/register', userController.register);
userRoutes.post('/login', userController.login);
userRoutes.put('/update/:id', userController.update);
userRoutes.delete('/delete/:id', userController.delete);
userRoutes.get('/details/:id', userController.getDetails);

module.exports = userRoutes;
