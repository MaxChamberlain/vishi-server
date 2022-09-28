const { get } = require('../config/getSHItem')

const getItem = async (req, res) => {
    try{
        const { sku } = req.body
        const data = await get(sku)
        res.status(200).json(data)
    }catch(e){
        console.error(e)
        res.status(500).json(e)
    }
}

module.exports = { getItem }