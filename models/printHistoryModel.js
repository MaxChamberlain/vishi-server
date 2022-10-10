const mongoose = require('mongoose')

const printSchema = mongoose.Schema(
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

const Print = mongoose.model('Print', printSchema)

module.exports = Print