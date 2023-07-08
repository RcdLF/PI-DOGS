const { Router } = require('express');
const handleDogs = require('../handlers/handleDogs');
const handleIdDogs = require('../handlers/handleIdDogs');

const routeDog = Router();

routeDog.get('/',handleDogs);
routeDog.get('/:id',handleIdDogs);

module.exports = routeDog;