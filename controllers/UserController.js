const { User } = require("../models/userModel")

async function createUser(req, res) {
    try {
        const { firstName, lastName, email, password, mobile } = req.body
        const user = await User.findOne({ email })
        if (user) {
            return res.status(200).json({ message: 'user already exists', status: false })
        }
        const newUser = new User({ ...req?.body })
        const savedUser = await newUser.save()
        return res.status(201).json({ status: true, data: savedUser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message, status: false })
    }
}

module.exports = {
    createUser
}