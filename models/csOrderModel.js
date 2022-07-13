const mongoose = require('mongoose')

const csOrderSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: 'open'
        },
        from: {
            type: String,
            required: true,
        },
        complete_by: {
            type: String,
            required: true,
            default: ' '
        },
        priority: {
            type: Number,
            required: true,
            default: 3
        },
        order_number: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        order_date:{
            type: String,
            required: true
        },
        line_items:{
            type: Array,
            required: true,
            default: ['']
        },
        notes: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const CsOrder = mongoose.model('csOrder', csOrderSchema, 'customer_service_orders')

module.exports = CsOrder