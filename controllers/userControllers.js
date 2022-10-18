const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')

const registerUser = async (req, res, next) => {
    try{
        const { name, email, password, company, isApproved, company_code } = req.body
    
        const userExists = await User.findOne({ email })
    
        if(userExists){
            res.status(400).json({message: 'User Already Exists'})
        }else{
            const user = await User.create({
                name, email, password, company, isApproved, company_code
            })
    
    
            if(user){
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id),
                    company: user.company,
                    isApproved: user.isApproved,
                    company_code: user.company_code,
                })
            }else{
                const err = new Error('An Error Has Occurred. (Error Code: Brimstone)')
                res.status(400)
                next(err)
            }
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Solicit)'})
    }
}

const authUser = async (req, res, next) => {
    try{
        const { email, password } = req.body
    
        const user = await User.findOne({ email })
    
        if(user && (await user.matchPassword(password))){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                isApproved: user.isApproved,
                company_code: user.company_code,
            })
        }else{
            res.status(400).json({text: 'Invalid Email or Password'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Kangaroo)'})
    }
}

const getUserRoles = async (req, res, next) => {
    try{
        const { _id } = req.body
    
        const user = await User.findOne({ _id })
    
        if(user){
            res.status(201).json({
                isAdmin: user.isAdmin,
                isApproved: user.isApproved,
                departments: user.departments
            })
        }else{
            res.status(400).json({text: 'Unknown Error (Error Code: Ladybug)'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Mangrove)'})
    }
}

const getUsersInCompany = async (req, res, next) => {
    try{
        const { _id } = req.body
    
        const user = await User.find({ _id })
        
        if(user){
            const usersList = await User.find( { company: { $all: user[0].company } } )
    
            for (let x = 0; x < usersList.length; x++) {
                usersList[x].password = null
            }
    
    
            res.status(201).send(usersList)
        }else{
            res.status(400).json({text: 'Unknown Error (Error Code: Ladybug)'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Layover)'})
    }
}

const approveUser = async (req, res, next) => {
    try{
        const { email } = req.body
        
        User.updateOne({email: email}, 
            {isApproved: true}, function (err, docs) {
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

const denyUser = async (req, res, next) => {
    try{
        const { email } = req.body
        try{
            await User.deleteOne({email: email})
            res.status(201).json({text: 'User Denied'})
        }catch(e){
            res.status(400).json({text: 'User not Found'})
        }
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Anteater)'})
    }
}

const updateRoles = async (req, res, next) => {
    try{
        const { email, departments } = req.body
            await User.updateMany({email: email}, 
                {$set: {departments: departments}}, function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated Docs : ", docs);
                }
            }).clone();
        
            res.status(201).json({text: 'User Approved'})
    }catch(e){
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Partisan)'})
    }
}

const setUserVersion = async (req, res, next) => {
    try{
        const { _id, version } = req.body
        await User.updateOne({ _id }, { version }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        })
        const user = await User.findOne({ _id })
        res.status(201).send(user)
    }catch(e){
        console.log(e)
        res.status(400).json({text: 'An Error Has Occurred. (Error Code: Partisan)'})
    }
}


module.exports = { registerUser, authUser, getUserRoles, getUsersInCompany, approveUser, denyUser, updateRoles, setUserVersion }