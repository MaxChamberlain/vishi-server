const asyncHandler = require('express-async-handler')
const Package = require('../models/packageModel')

const getPackages = async (req, res, next) => {
    try{
        const { startDate, endDate } = req.body
        const packs = await Package.find({
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

module.exports = { getPackages }