const Return = require('../models/returnModel')
const asyncHandler = require('express-async-handler')

const insertReturn = async (req, res, next) => {
    try{
        const { order_number, user } = req.body

        console.log(req.body)

        const items = await Return.create({
            order_number,
            user
        })
    
        if(items){
            res.status(201).send(items)
        }else{
            res.status(400).json({text: 'Invalid Order Number'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jaguar)'})
    }
}

const processReturn = async (req, res, next) => {
    try{
        const { order_number } = req.body
        const item = await Return.updateMany({ order_number }, {status: 'Processed'})

        if(item){
            res.status(201).send(item)
        }else{
            res.status(400).json({text: 'Invalid Order Number'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Tiger)'})
    }
}
        

module.exports = { insertReturn, processReturn }