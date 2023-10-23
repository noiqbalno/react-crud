const itemRoutes = require('express').Router();
const itemController = require('../controllers/ItemController');

itemRoutes.get('/', itemController.getItems);
itemRoutes.post('/create', itemController.create);
itemRoutes.put('/update/:id', itemController.update);
itemRoutes.delete('/delete/:id', itemController.delete);
itemRoutes.get('/details/:id', itemController.getDetails);

module.exports = itemRoutes;
