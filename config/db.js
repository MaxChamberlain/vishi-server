const { get } = require('./getSHPicks')
const mongoose = require('mongoose')

const connectDB = async() => { 
    try{
        const conn = await mongoose.connect('mongodb+srv://admin:Administrator123@cluster0.q7rfn.mongodb.net/?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log('MongoDB Connected.')
    }catch(e){
        console.error(e)
        process.exit()
    }

    // setInterval(() => get(`
    // query {
    //     picks_per_day{
    //         request_id
    //         complexity
    //         data(last: 10){
    //             edges{
    //                 node{
    //                     user_first_name
    //                     user_last_name
    //                     order_number
    //                     sku
    //                     quantity
    //                     picked_quantity
    //                     created_at
    //                     id
    //                 }
    //             }
    //         }
    //     }
    // }
    // `), 5000)
}

module.exports = connectDB