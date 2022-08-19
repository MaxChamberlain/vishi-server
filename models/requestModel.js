const mongoose = require('mongoose')

const requestSchema = mongoose.Schema(
    {
        sku: {
            type: String,
            reguired: true
        },
        status: {
            type: String,
            reguired: true,
            default: 'open'
        },
        priority: {
            type: Number,
            reguired: true,
            default: 3
        },
        quantity_needed: {
            type: Number,
            reguired: true,
            default: 1
        },
        bin_number: {
            type: String,
            reguired: true
        },
        item_name: {
            type: String,
            reguired: true
        },
        submitter: {
            type: String,
            reguired: true
        },
        company:{
            type: String,
            required: true
        },
        notes: {
            type: Array,
            required: false
        },
        fixer: {
            type: String,
            required: false,
            default: 'None'
        }
    },
    {
        timestamps: true
    }
)

const Request = mongoose.model('Request', requestSchema)

module.exports = Request