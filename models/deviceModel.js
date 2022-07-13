const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema(
    {
        make: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        variant: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: false
        },
        serial: {
            type: String,
            required: true,
            unique: true
        },
        checked_out: {
            type: Boolean,
            required: true,
            default: false
        },
        owner: {
            type: String,
            required: false
        },
        damaged: {
            type: Boolean,
            required: true,
            default: false
        },
        damage_description: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: true,
            default: 'Personal'
        }
    },
    {
        timestamps: true
    }
)

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device