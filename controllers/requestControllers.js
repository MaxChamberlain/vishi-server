const Request = require('../models/requestModel')
const asyncHandler = require('express-async-handler')

const getItemRequests = async (req, res, next) => {

    const request = await Request.find({$not: {status: 'cleared'}, $not: {status: 'unfound'}})

    if(request){
        res.status(201).send(request)
    }else{
        res.status(400).json({text: 'Unknown Error (Error Code: Dandylion)'})
    }
}

const insertItemRequest = async (req, res, next) => {
    try{
        const data = JSON.stringify(req.body)
    
        const { 
            sku,
            status,
            priority,
            quantity_needed,
            bin_number,
            item_name,
            submitter,
            company
        } = req.body
       
        const request = await Request.create({
            sku,
            status,
            priority,
            quantity_needed,
            bin_number,
            item_name,
            submitter,
            company 
        })
    
        if(request){
            res.status(201).send('Request Created')
        }else{
            const err = new Error('An Error Has Occurred. (Error Code: Replicate)')
            res.status(400)
            next(err)
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Restoration)'})
    }
}

const markItemAsSeen = async (req, res, next) => {
    try{
        const data = JSON.stringify(req.body)
    
        const { _id } = req.body
       
        Request.updateOne({ _id }, 
            {status: 'seen'}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'Item Updated'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Floral)'})
    }
}

const markItemAsComplete = async (req, res, next) => {
    try{
        const data = JSON.stringify(req.body)
    
        const { _id } = req.body
       
        Request.updateOne({ _id }, 
            {status: 'complete'}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'Item Updated'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: DramaQueen)'})
    }
}

const markItemAsUnfound = async (req, res, next) => {
    try{
        const { _id } = req.body
       
        Request.updateOne({ _id }, 
            {status: 'unfound'}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'Item Updated'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Soldier)'})
    }
}

const markItemAsCleared = async (req, res, next) => {
    try{
        const { _id } = req.body
       
        Request.updateOne({ _id }, 
            {status: 'cleared'}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'Item Updated'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Soldier)'})
    }
}

const deleteItem = async (req, res, next) => {
    
    const { _id } = req.body
   try{
    const data = await Request.deleteOne({ _id })
    res.status(201).json({text: 'Removed Item'})
   }catch(e){
    console.log(e)
   }
}

const insertNote = async (req, res, next) => {
    try{
        const { _id, note } = req.body
        Request.updateOne({ _id },
            {$push : {notes: note}}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        }
        )
        res.status(201).json({text: 'Note Added'})
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Falacy)'})
    }
}

module.exports = { getItemRequests, insertItemRequest, markItemAsSeen, markItemAsComplete, markItemAsUnfound, deleteItem, insertNote, markItemAsCleared }