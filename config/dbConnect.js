const mongoose = require('mongoose')
require('dotenv').config()

async function dbConnect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('database connected successfully')
    } catch (error) {
        console.log('database couldnt be connected', error)
        throw new Error(error)
    }
}

module.exports = {
    dbConnect
}