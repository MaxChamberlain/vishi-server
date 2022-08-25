var express = require('express');
var router = express.Router();
const { insertPack, getPacks } = require('../controllers/packsController')

router.route('/insert').post(insertPack)
router.route('/getall').post(getPacks)

module.exports = router;
