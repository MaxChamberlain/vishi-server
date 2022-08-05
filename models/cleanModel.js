const mongoose = require('mongoose')

const clean = mongoose.Schema(
    {
        barcode: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: 'Cleaned'
        }
    },
    {
        timestamps: true
    }
)

const Clean = mongoose.model('clean', clean, 'cleaned_garments')

module.exports = Clean