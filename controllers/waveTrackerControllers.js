const Wave = require('../models/waveModel')
const asyncHandler = require('express-async-handler')

const getWaves = async (req, res, next) => {
    try{
        const waves = await Wave.find() 
        
        if(waves){
            res.status(201).send(waves)
        }else{
            res.status(400).json({text: 'No Waves Left', code: code})
        }
    }catch(e){
        res.status(400).json({text: 'No Waves Left', code: code})
    }
}

const insertWave = async (req, res, next) => {
    try{
        const { 
            picker,
            wave_number,
            wave_status,
        } = req.body

        const wave_company = 'Vitality'
       
        await Wave.create({ 
            picker,
            wave_number,
            wave_status,
            wave_company
        })

            res.status(201).send('Wave Created')
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Taxi)'})
    }
}

const picker = async (req, res, next) => {
    try{
        const { _id, picker } = req.body
        
        Wave.updateOne({_id: _id}, 
            {picker: picker}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'User Approved'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Honeybee)'})
    }
}

const number = async (req, res, next) => {
    try{
        const { _id, wave_number } = req.body
        
        Wave.updateOne({_id: _id}, 
            {wave_number: wave_number}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'User Approved'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Honeybee)'})
    }
}

const status = async (req, res, next) => {
    try{
        const { _id, wave_status } = req.body
        
        Wave.updateOne({_id: _id}, 
            {wave_status: wave_status}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
    
        res.status(201).json({text: 'User Approved'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Honeybee)'})
    }
}

module.exports = { getWaves, insertWave, picker, number, status }