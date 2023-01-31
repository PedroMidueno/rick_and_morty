const express = require('express');
const characters = require('./characters');
const router = express.Router();

router.use('/rickandmorty', characters);

module.exports = router;