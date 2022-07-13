const mongoose = require('mongoose')

const fixSchema = mongoose.Schema(
    {
        text: {
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
        relevance: {
            type: String,
            reguired: true,
            default: 'General'
        },
        submitter: {
            type: String,
            reguired: true
        },
        company:{
            type: String,
            required: true
        },
        completed_by:{
            type: String,
            required: true,
            default: ' '
        },
    },
    {
        timestamps: true
    }
)

const Fix = mongoose.model('Fix', fixSchema)

module.exports = Fix