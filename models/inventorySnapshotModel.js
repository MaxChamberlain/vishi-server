const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
    {
        SKU: {
            type: String,
            reguired: true
        },
        Name: {
            type: String,
            reguired: false
        },
        Warehouse: {
            type: String,
            reguired: false
        }
    },
    {
        timestamps: true
    }
)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item