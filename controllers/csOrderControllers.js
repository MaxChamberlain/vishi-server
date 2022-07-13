const CsOrder = require('../models/csOrderModel')
const asyncHandler = require('express-async-handler')

const getOrders = async (req, res, next) => {
    try{
        const { company } = req.body
    
        const orders = await CsOrder.find({ company }) 
    
        if(orders){
            res.status(201).send(orders)
        }else{
            res.status(400).json({text: 'company doesnt exist'})
        }
    }catch(e){
        res.status(400).json({text: 'company doesnt exist'})
    }
}

const insertOrder = async (req, res, next) => {
    try{
        const { 
            text, priority, order_number, email, order_date, line_items, from
        } = req.body
       
        const request = await CsOrder.create({ 
            text, priority, order_number, email, order_date, line_items, from
        })
    
        if(request){
            res.status(201).send('Request Created')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Jackal)')
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Jackal)'})
    }
}

const updateOrder = async (req, res, next) => {
    try{
        const { 
            _id,
            status,
            complete_by,
        } = req.body
       
        const request = await CsOrder.updateOne({ _id }, 
            {status: status, complete_by: complete_by});
    
        if(request){
            res.status(201).send('updated order')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Trendsetter)')
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Trendsetter)'})
    }
}

const addNote = async (req, res, next) => {
    try{
        const { 
            _id,
            note
        } = req.body
       
        const request = await CsOrder.updateOne({ _id }, 
            {$push: {notes: note}});
    
        if(request){
            res.status(201).send('updated order')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Trendsetter)')
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Trendsetter)'})
    }
}

const removeNote = async (req, res, next) => {
    try{
        const { 
            from,
            text,
            _id
        } = req.body

        await CsOrder.updateOne({ _id }, { "$pull": { "notes": { "text": text, "from": from } }})

        res.status(201).send('updated order')

    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Trendsetter)'})
    }
}

module.exports = { getOrders, insertOrder, updateOrder, addNote, removeNote }