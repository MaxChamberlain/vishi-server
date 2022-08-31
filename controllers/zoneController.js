const Zone = require('../models/zoneMapModel')

const getAll = async (req, res, next) => {
    try{

        const { origin_zip } = req.body

        const items = await Zone.find({ origin_zip })

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

module.exports = { getAll }