const express = require('express')
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser } = require('../controllers/userController')
const AuthRouter = express.Router()

AuthRouter.post('/sign-up', createUser)
AuthRouter.get('/login', loginUser)
AuthRouter.get('/getAllUsers', getAllUsers)
AuthRouter.get('/getUser/:id', getUser)
AuthRouter.delete('/deleteUser/:id', deleteUser)
AuthRouter.put('/updateUser/:id', updateUser)

module.exports = {
    AuthRouter
}
