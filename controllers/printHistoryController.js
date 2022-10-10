const Print = require('../models/printHistoryModel');

const getPrints = async (req, res, next) => {
    try{
        const { print_sku } = req.body
        const prints = await Print.find({ print_sku }) 
    
        if(prints){
            res.status(201).send(prints)
        }else{
            res.status(400).json({text: 'No prints found'})
        }
    }catch(e){
        res.status(400).json({text: 'Error getting prints'})
    }
}

const insertPrint = async (req, res, next) => {
    try{
        const { 
            printed_by,
            print_date,
            print_sku
        } = req.body
    
        const request = await Print.create({ 
            printed_by,
            print_date,
            print_sku
        })
    
        if(request){
            res.status(201).send('Print Created')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Jackal)')
        }
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jackal)'})
    }
}

module.exports = {
    getPrints,
    insertPrint
}
