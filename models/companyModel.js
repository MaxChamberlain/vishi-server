const mongoose = require('mongoose')

const companySchema = mongoose.Schema(
    {
        name: {
            type: String,
            reguired: true
        },
        code: {
            type: String,
            reguired: true,
        }
    },
    {
        timestamps: true
    }
)

const Company = mongoose.model('Company', companySchema)

module.exports = Company