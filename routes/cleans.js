var express = require('express');
var router = express.Router();
const { insertClean, getAll } = require('../controllers/cleansController')

router.route('/insert').post(insertClean)
router.route('/getall').post(getAll)


module.exports = router;
