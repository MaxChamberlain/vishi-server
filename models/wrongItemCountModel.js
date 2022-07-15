const mongoose = require('mongoose')

const wrongItemSchema = mongoose.Schema(
    {
        amount: {
            type: String,
            reguired: true
        },
    },
    {
        timestamps: true
    }
)

const Item = mongoose.model('wrongItem', wrongItemSchema)

module.exports = Item