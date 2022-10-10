const mongoose = require('mongoose')

const fixSchema = mongoose.Schema(
    {
        printed_by: {
            type: String,
            required: true
        },
        print_date: {
            type: Date,
            required: true,
        },
        print_sku: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Fix = mongoose.model('Fix', fixSchema)

module.exports = Fix