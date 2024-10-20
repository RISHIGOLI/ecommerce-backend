const express = require('express')
const { createUser, loginUser, getAllUsers, getUser, deleteUser } = require('../controllers/userController')
const AuthRouter = express.Router()

AuthRouter.post('/sign-up', createUser)
AuthRouter.get('/login', loginUser)
AuthRouter.get('/getAllUsers', getAllUsers)
AuthRouter.get('/getUser/:id', getUser)
AuthRouter.get('/deleteUser/:id', deleteUser)

module.exports = {
    AuthRouter
}
