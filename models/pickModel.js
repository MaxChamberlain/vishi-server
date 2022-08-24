const mongoose = require('mongoose')

const pickSchema = mongoose.Schema(
    {
        user_first_name:{
            type: String,
            required: true
        },
        user_last_name:{
            type: String,
            required: true
        },

        order_number: {
            type: String,
            required: true,
        },
        sku: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        picked_quantity: {
            type: Number,
            required: true,
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        id: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

const Picks = mongoose.model('Picks', pickSchema)

module.exports = Picks