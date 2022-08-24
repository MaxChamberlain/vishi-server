var express = require('express');
var router = express.Router();
const { insertPick, getPicks } = require('../controllers/picksController')

router.route('/insert').post(insertPick)
router.route('/getall').post(getPicks)

module.exports = router;
