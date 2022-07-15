const Item = require('../models/wrongItemCountModel')
const asyncHandler = require('express-async-handler')

const getCounts = async (req, res, next) => {
    try{
        const counts = await Item.find() 
    
        if(counts){
            res.status(201).send(counts)
        }else{
            res.status(400).json({text: 'Unknown Error (Error Code: Avengers)'})
        }
    }catch(e){
        res.status(400).json({text: 'Unknown Error (Error Code: Avengers)'})
    }

}

const insertCount = async (req, res, next) => {
    try{
        const { 
            amount,
        } = req.body
       
        const request = await Item.create({ 
            amount
        })
    
        if(request){
            res.status(201).send('Amount Added')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Trendsetter)')
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Trendsetter)'})
    }
}

module.exports = { getCounts, insertCount }