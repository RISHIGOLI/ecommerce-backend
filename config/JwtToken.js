const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (id) => {
    return jwt.sign({ email: id }, process.env.AUTH_SECRET, { expiresIn: "3d" })
}

module.exports = {
    generateToken
}