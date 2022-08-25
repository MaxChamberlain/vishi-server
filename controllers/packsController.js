const asyncHandler = require('express-async-handler')
const Pack = require('../models/packModel')

const insertPack = async (req, res, next) => {
    const { 
        user_first_name,
        user_last_name,
        order_number,
        sku,
        quantity,
        packed_quantity,
        created_at,
        id
    } = req

    try{
        const items = await Pack.create({
            user_first_name,
            user_last_name,
            order_number,
            sku,
            quantity,
            packed_quantity,
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

const getPacks = async (req, res, next) => {
    try{
        const { startDate, endDate } = req.body
        const packs = await Pack.find({
            created_at: {
                $gte: startDate,
                $lte: endDate
            }
        })
        res.status(201).send(packs)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
}

module.exports = { insertPack, getPacks }