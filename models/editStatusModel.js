const mongoose = require('mongoose')

const editStatus = mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        started: {
            type: Date,
            required: true,
            default: Date.now
        },
        finished: {
            type: Date,
            required: true,
            default: '12/31/9999'
        }
    },
    {
        timestamps: true
    }
)

const Edit = mongoose.model('pallet_edits', editStatus, 'pallet_edits')

module.exports = Edit