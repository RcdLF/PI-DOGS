const { Router } = require('express');

const dogs = require('./dogs');
const temperament = require('./temperament');

const router = Router();

router.use('/dogs',dogs);
router.use('/temperament',temperament);

module.exports = router;