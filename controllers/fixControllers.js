const Fix = require('../models/fixModel')
const asyncHandler = require('express-async-handler')

const getFixRequests = async (req, res, next) => {
    try{
        const request = await Fix.find() 
    
        if(request){
            res.status(201).send(request)
        }else{
            res.status(400).json({text: 'Unknown Error (Error Code: Dandylion)'})
        }
    }catch(e){
        res.status(400).json({text: 'Unknown Error (Error Code: Dandylion)'})
    }
}

const insertFixRequests = async (req, res, next) => {
    try{
        const { 
            text,
            status,
            priority,
            relevance,
            submitter,
            company,
            completed_by
        } = req.body
       
        const request = await Fix.create({ 
            text,
            status,
            priority,
            relevance,
            submitter,
            company,
            completed_by
        })
    
        if(request){
            res.status(201).send('Request Created')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Trendsetter)')
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Trendsetter)'})
    }
}

const openFixRequests = async (req, res, next) => {
    try{
        const { _id } = req.body
       
        Fix.updateOne({ _id }, 
            {status: 'open'}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'Item Updated'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Casey)'})
    }
}

const completeFixRequests = async (req, res, next) => {
    try{
        const { _id, completed_by } = req.body
       
        Fix.updateOne({ _id }, 
            {status: 'complete', completed_by: completed_by }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'Item Updated'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Epsilon)'})
    }
}

const reprioritizeFixRequests = async (req, res, next) => {
    try{
        const { _id, priority } = req.body
       
        Fix.updateOne({ _id }, 
            {priority: priority}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'Item Updated'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Gamma)'})
    }
}

const deleteFixRequest = async (req, res, next) => {
    try{
        const { _id } = req.body
       
        await Fix.deleteOne({ _id });
    
        res.status(201).json({text: 'Item Deleted'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Showroom)'})
    }
}

module.exports = { getFixRequests, insertFixRequests, completeFixRequests, openFixRequests, reprioritizeFixRequests, deleteFixRequest }