const mongoose = require('mongoose')

const returnObject = mongoose.Schema(
    {
        order_number: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: 'Received'
        }
    },
    {
        timestamps: true
    }
)

const Return = mongoose.model('returnObject', returnObject, 'received_returns')

module.exports = Return