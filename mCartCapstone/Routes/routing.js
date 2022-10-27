const express = require('express');

const routing = express.Router();

const users = require('../Controller/userController');
// const ordersController = require('../Controller/ordersController');
// const productsController = require('../Controller/productsController');
// const cartController = require('../Controller/cartController');
const invalidController = require('../Controller/invalidController');

routing.post('/login', users.loginUser);

routing.post('/signup', users.signupUser);

// routing.get('/tablets', productController.loginUser);

// routing.get('/mobiles', productController.loginUser);

// routing.get('/carts', cartController.loginUser);

// routing.get('/carts/:username', cartController.loginUser);

// routing.post('/carts', cartController.loginUser);

// routing.put('/carts/:username', cartController.loginUser);

// routing.post('/orders/:username', ordersController.loginUser);

// routing.delete('/products/:product', productsController.loginUser);

routing.all('/*', invalidController.invalid);

module.exports = routing;
