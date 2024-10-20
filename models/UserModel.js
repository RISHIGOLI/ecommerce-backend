const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, min: 12, max: 60 },
    email: {
        type: String,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'invalid email id'
        },
        required: true,
        unique: true
    },
    password: { type: String, required: true },
    mobile: {type:Number}
})

const User = mongoose.model('User', UserSchema)
module.exports = {
    User
}