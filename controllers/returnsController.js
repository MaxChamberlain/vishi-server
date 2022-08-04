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

module.exports = { insertReturn }