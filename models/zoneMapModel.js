const mongoose = require('mongoose')

const zone = mongoose.Schema(
    {
        origin_zip: {
            type: String,
            required: true,
        },
        origin_city: {
            type: String,
            required: true,
        },
        dest_zip: {
            type: String,
            required: true,
        },
        zone_number: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Zone = mongoose.model('zone', zone, 'zone_map')

module.exports = Zone