const Pallets = require('../models/palletModel')
const asyncHandler = require('express-async-handler')

const getPallets = async (req, res, next) => {
    try{
        const items = await Pallets.find()
    
        if(items){
            res.status(201).send(items)
        }else{
            res.status(400).json({text: 'Invalid SKU'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

const insertPallets = async (req, res, next) => {
    try{
        await Pallets.updateOne({}, {$set: {items: req.body.pallets}}, {upsert: true})
        res.status(201).send('Pallets Updated')
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

module.exports = { getPallets, insertPallets }