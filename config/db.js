const { get } = require('./getSHPicks')
const mongoose = require('mongoose')

const connectDB = async() => { 
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log('MongoDB Connected.')
    }catch(e){
        console.error(e)
        process.exit()
    }
}

module.exports = connectDB