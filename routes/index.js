const homeRoute = require('../controllers/lesson1');
const usernameRoute = require('../controllers/lesson1');
const routes = require('express').Router();


routes.get('/', homeRoute.homeRoute);
routes.get('/username', usernameRoute.usernameRoute);


module.exports = routes;