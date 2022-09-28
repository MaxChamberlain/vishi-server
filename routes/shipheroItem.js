const express = require('express');
const router = express.Router();
const { getItem } = require('../controllers/shipheroItemController');

router.post('/get', getItem);

module.exports = router;