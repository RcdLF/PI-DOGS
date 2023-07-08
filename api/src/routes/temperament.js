const { Router } = require('express');
const handleTemperament = require('../handlers/handleTemperament');

const routeTemp = Router();

routeTemp.get('/',handleTemperament)


module.exports = routeTemp;