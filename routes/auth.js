const express = require('express')
const { createUser, loginUser } = require('../controllers/userController')
const AuthRouter = express.Router()

AuthRouter.post('/sign-up', createUser)
AuthRouter.get('/login', loginUser)

module.exports = {
    AuthRouter
}