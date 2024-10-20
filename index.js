const express = require('express')
const { dbConnect } = require('./config/dbConnect')
const { AuthRouter } = require('./routes/auth')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/api/user', AuthRouter)
dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('server started on port : ', PORT)
        })
    })
    .catch((error) => {
        console.log('server unable to start', error)
    })
