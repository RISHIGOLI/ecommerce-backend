const express = require('express')
const { createUser } = require('../controllers/userController')
const AuthRouter = express.Router()

AuthRouter.post('/', createUser)

module.exports = {
    AuthRouter
}