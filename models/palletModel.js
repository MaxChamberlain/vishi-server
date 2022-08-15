const mongoose = require('mongoose')

const palletSchema = mongoose.Schema(
    {
        pallets: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Pallets = mongoose.model('Pallets', palletSchema)

module.exports = Pallets