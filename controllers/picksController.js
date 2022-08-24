const asyncHandler = require('express-async-handler')
const Pick = require('../models/pickModel')

const insertPick = async (req, res, next) => {
    const { 
        user_first_name,
        user_last_name,
        order_number,
        sku,
        quantity,
        picked_quantity,
        created_at,
        id
    } = req

    try{
        const items = await Pick.create({
            user_first_name,
            user_last_name,
            order_number,
            sku,
            quantity,
            picked_quantity,
            created_at,
            id
        })
        console.log('Done: ', id)
    }catch(e){
        if(e.code !== 11000){
            console.log(e, ' ' + id, sku)
        }else{
            console.log('Duplicate: ', id, sku)
        }
    }
}

const getPicks = async (req, res, next) => {
    try{
        const { id } = req.params
        const { startDate, endDate } = req.query
        const start = new Date(startDate)
        const end = new Date(endDate)
        const picks = await Pick.find({
            created_at: {
                $gte: start,
                $lte: end
            }
        })
        res.status(201).send(picks)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
}


module.exports = { insertPick, getPicks }