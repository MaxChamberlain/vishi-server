const Pallets = require('../models/palletModel')
const asyncHandler = require('express-async-handler')

const getItemRequests = async (req, res, next) => {
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

module.exports = { getPallets }