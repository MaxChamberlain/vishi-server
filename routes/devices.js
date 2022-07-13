var express = require('express');
var router = express.Router();
const { getDevices, insertDevice, checkoutDevice, checkInDevice, changeDeviceType, deleteDevice } = require('../controllers/deviceControllers')

router.route('/getall').post(getDevices)
router.route('/add').post(insertDevice)
router.route('/checkout').post(checkoutDevice)
router.route('/checkin').post(checkInDevice)
router.route('/typechange').post(changeDeviceType)
router.route('/delete').post(deleteDevice)
 
module.exports = router;
