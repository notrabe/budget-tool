const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please enter a username']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Please enter your password']
    }
})

module.exports = mongoose.model('Users', userSchema)