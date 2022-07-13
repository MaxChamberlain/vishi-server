const Company = require('../models/companyModel')
const asyncHandler = require('express-async-handler')

const getCompanies = async (req, res, next) => {
    try{
        const companies = await Company.find() 
    
        if(companies){
            res.status(201).send(companies)
        }else{
            res.status(400).json({text: 'Unknown Error (Error Code: Avengers)'})
        }
    }catch(e){
        res.status(400).json({text: 'Unknown Error (Error Code: Avengers)'})
    }

}

const getCompany = async (req, res, next) => {
    try{
        const { code } = req.body
    
        const companies = await Company.findOne({ code }) 
        
        if(companies){
            res.status(201).send(companies)
        }else{
            res.status(400).json({text: 'company doesnt exist', code: code})
        }
    }catch(e){
        res.status(400).json({text: 'company doesnt exist', code: code})
    }
}

const insertCompany = async (req, res, next) => {
    try{
        const { 
            name,
            code
        } = req.body
       
        const request = await Company.create({ 
            name,
            code
        })
    
        if(request){
            res.status(201).send('Company Created')
        }else{
            res.status(400).send('An Error Has Occurred. (Error Code: Trendsetter)')
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Trendsetter)'})
    }
}

module.exports = { getCompanies, insertCompany, getCompany }