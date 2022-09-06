const Clean = require('../models/cleanModel')
const asyncHandler = require('express-async-handler')

const insertClean = async (req, res, next) => {
    try{
        const { barcode, user } = req.body

        console.log(req.body)

        const items = await Clean.create({
            barcode,
            user,
        })
    
        if(items){
            res.status(201).send(items)
        }else{
            res.status(400).json({text: 'Invalid Order Number'})
        }
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

const getAll = async (req, res, next) => {
    try{

        const { startDate, endDate } = req.body

        const items = await Clean.find({ 
            createdAt: {
                $gte: startDate,
                $lte: endDate
            }
         })

        if(items){
            res.status(201).send(items)
        }else{
            console.log('test')
            res.status(400).json({text: 'Invalid Order Number'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Lemur)'})
    }
}

module.exports = { insertClean, getAll }