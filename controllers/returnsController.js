const Return = require('../models/returnModel')
const asyncHandler = require('express-async-handler')

const insertReturn = async (req, res, next) => {
    try{
        const { order_number, user, processed_by } = req.body


        const items = await Return.create({
            order_number,
            user,
            processed_by
        })
    
        if(items){
            res.status(201).send(items)
        }else{
            res.status(201).json({text: 'Failed to insert'})
        }
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

const processReturn = async (req, res, next) => {
    try{
        const { order_number, line_items, processed_by } = req.body
        const item = await Return.updateMany({ order_number }, {status: 'Processed', line_items: line_items, processed_by: processed_by})

        if(item){
            res.status(201).send(item)
        }else{
            res.status(400).json({text: 'Invalid Order Number'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Tiger)'})
    }
}
        

const getAll = async (req, res, next) => {
    try{
        const { startDate, endDate } = req.body
        const items = await Return.find({ 
            updatedAt: {
                $gte: startDate,
                $lte: endDate
            }
         })

        if(items){
            res.status(201).send(items)
        }else{
            res.status(400).json({text: 'Invalid Order Number'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Lemur)'})
    }
}

module.exports = { insertReturn, processReturn, getAll }