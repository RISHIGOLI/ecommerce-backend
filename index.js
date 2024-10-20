const express = require('express')
const { dbConnect } = require('./config/dbConnect')
const { errorHandler, notFound } = require('./middlewares/errorHandler')
const { AuthRouter } = require('./routes/auth')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/api/user', AuthRouter)

//middleware after all routes for error handling i.e. below or bottom of all routes
app.use(notFound)
app.use(errorHandler)

dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('server started on port : ', PORT)
        })
    })
    .catch((error) => {
        console.log('server unable to start', error)
    })
