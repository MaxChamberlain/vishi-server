var express = require('express');
var router = express.Router();
const { getWaves, insertWave, picker, number, status } = require('../controllers/waveTrackerControllers')

router.route('/getall').post(getWaves)
router.route('/new').post(insertWave)
router.route('/updatepicker').post(picker)
router.route('/updatenumber').post(number)
router.route('/updatestatus').post(status)

module.exports = router;
