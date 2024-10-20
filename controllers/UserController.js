const { User } = require("../models/userModel")
const asyncHandler = require('express-async-handler')

const createUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, mobile } = req.body
    const user = await User.findOne({ email })
    if (user) {
        // res.status(400)
        throw new Error("user already exists")
    }
    const newUser = new User({ ...req?.body })
    const savedUser = await newUser.save()
    return res.status(201).json({ status: true, data: savedUser })
})

module.exports = {
    createUser
}