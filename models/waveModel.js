const mongoose = require('mongoose')

const waveSchema = mongoose.Schema(
    {
        picker: {
            type: String,
            required: true
        },
        wave_number:{
            type: Number,
            required: true
        },
        wave_status: {
            type: String,
            required: true,
        },
        wave_company: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Wave = mongoose.model('Wave', waveSchema, 'wave_tracker')

module.exports = Wave