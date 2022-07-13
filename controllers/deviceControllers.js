const Device = require('../models/deviceModel')
const asyncHandler = require('express-async-handler')

const getDevices = async (req, res, next) => {
    try{
        const devices = await Device.find() 
    
        if(devices){
            res.status(201).send(devices)
        }else{
            res.status(400).json({text: 'No devices found'})
        }
    }catch(e){
        res.status(400).json({text: 'Error getting devices'})
    }
}

const insertDevice = async (req, res, next) => {
    try{
        const { 
            make,
            model,
            variant,
            options,
            serial,
            checked_out,
            owner,
            damaged,
            damage_description,
            type
        } = req.body
       
        const request = await Device.create({ 
            make,
            model,
            variant,
            options,
            serial,
            checked_out,
            owner,
            damaged,
            damage_description,
            type
        })
    
        if(request){
            res.status(201).send('Device Created')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Jackal)')
        }
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jackal)'})
    }
}

const checkoutDevice = async (req, res, next) => {
    try{
        const { serial, owner } = req.body
        const request = await Device.updateOne({ serial }, { checked_out: true, owner })
        res.status(201).send('Device Checked Out')
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jackal)'})
    }
}

const checkInDevice = async (req, res, next) => {
    try{
        const { serial, damaged, damage_description } = req.body
        const request = await Device.updateOne({ serial }, { checked_out: false, owner: '', damaged, damage_description })
        res.status(201).send('Device Checked In')
    }catch(e){
        res.status(400).send(e)
    }
}

const changeDeviceType = async (req, res, next) => {
    try{
        const { serial, type } = req.body
        const request = await Device.updateOne({ serial }, { type: type })
        res.status(201).send('Device Type Changed')
    }catch(e){
        res.status(400).send(e)
    }
}

const deleteDevice = async (req, res, next) => {
    try{
        const { serial } = req.body
        const request = await Device.deleteOne({ serial })
        res.status(201).send('Device Deleted')
    }catch(e){
        res.status(400).send(e)
    }
}
module.exports = { getDevices, insertDevice, checkoutDevice, checkInDevice, changeDeviceType, deleteDevice }