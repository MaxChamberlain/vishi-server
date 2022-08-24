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

module.exports = { insertPick }