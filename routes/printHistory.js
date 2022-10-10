const express = require('express');
const router = express.Router();

const { getPrints, insertPrint } = require('../controllers/printHistoryController')

router.route('/getall').post(getPrints)
router.route('/new').post(insertPrint)

module.exports = router;