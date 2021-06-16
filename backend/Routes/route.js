const express = require('express');
const Router = express.Router();
const RouteControll = require('../controllers/routecontroller');
Router.route('/').get(RouteControll.onconnect);


module.exports = Router;