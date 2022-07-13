const jwt = require('jsonwebtoken')

const generateToken = id => {
    return jwt.sign({id}, '_vishi:@user_login_token', {
        expiresIn: '30d'
    })
}

module.exports = generateToken