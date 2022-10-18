const Item = require('../models/inventorySnapshotModel')
const asyncHandler = require('express-async-handler')

const getItemRequests = async (req, res, next) => {
    try{
        const { sku } = req.body
        const items = await Item.find({SKU: {$regex: sku}})
    
        if(items){
            res.status(201).send(items)
        }else{
            res.status(400).json({text: 'Invalid SKU'})
        }
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

const getbyupc = async (req, res, next) => {
    try{
        const { Barcode } = req.body
        console.log({ Barcode: Barcode.toString() }, typeof Barcode.toString())
        const items = await Item.findOne({ Barcode: (Barcode) })
        if(items){
            res.status(201).send(items)
        }else{
            res.status(400).json({text: 'Invalid SKU'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

module.exports = { getItemRequests, getbyupc }