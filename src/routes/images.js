const express = require('express');
const getImageFile = require('../controllers/getImageFile');

const route = express.Router();

route.get('/', getImageFile);

module.exports = route;
