const mongoose = require('mongoose')

const packageSchema = mongoose.Schema(
    {
        order_id: {
            type: String,
            required: true,
            unique: true
        },
        warehouse_id: {
            type: String,
            required: true
        },
        order: {
            type: Object,
            required: true,
            default: {}
        },
        address: {
            type: Object,
            required: true,
            default: {}
        },
        created_date: {
            type: Date,
            required: true,
            default: Date.now
        },
        shipping_labels: {
            type: Array,
            required: true,
            default: []
        }
    },
    {
        timestamps: true
    }
)

const Packages = mongoose.model('Packages', packageSchema)

module.exports = Packages