const { User } = require("../models/userModel")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { generateToken } = require("../config/JwtToken")

const createUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, mobile } = req.body
    const user = await User.findOne({ email })
    if (user) {
        // res.status(400)
        throw new Error("user already exists")
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ firstName, lastName, email, password: hashPassword, mobile })

    const savedUser = await newUser.save()
    return res.status(201).json({ status: true, data: savedUser })
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //1. check whether user exists or not
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error("User not found !")
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error("Invalid Credentials")
    }
    const token = generateToken(email)
    return res.status(200).json({ status: true, data: { user, token } })
    //2. 
})

module.exports = {
    createUser, loginUser
}