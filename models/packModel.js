const mongoose = require('mongoose')

const packSchema = mongoose.Schema(
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
        created_at: {
            type: Date,
            default: Date.now
        },
        id: {
            type: String,
            required: true,
            unique: true
        },
        total_items: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Packs = mongoose.model('Packs', packSchema)

module.exports = Packs