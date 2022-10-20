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

const addItem = async (req, res, next) => {
    try{
        const { SKU, Name, Warehouse, Price, Barcode } = req.body
        const item = await Item.create({
            SKU,
            Name,
            Warehouse,
            Price,
            Barcode,
        })
        if(item){
            res.status(201).json({text: 'Item Added'})
        }else{
            res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
        }
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

const updateItem = async (req, res, next) => {
    try{
        const { Barcode, Price } = req.body
        await Item.updateOne({ Barcode: (Barcode) }, { Price: Price })
        const items = await Item.findOne({ Barcode: (Barcode) })
        console.log(items)
        if(items){
            res.status(201).send(items)
        }else{
            res.status(400).json({text: 'Invalid SKU'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

module.exports = { getItemRequests, getbyupc, addItem, updateItem }