const Users = require('../models/users-model')

exports.addUser = async (req, res, next) => {
    try {
        const {username, password} = req.body

        const user = await Users.create(req.body)

        return res.status(201).json({
            success: true,
            data: user
        })
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).mape(val => val.message)

            return res.status(400).json({
                success: false, 
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: messages
            })
        }
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)
        if(!user){
            return res.status(404).json({
                success: false,
                error: 'User not found.'
            })
        }

        await user.remove()

        res.status(200).json({
            success: true,
            data: user
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error.'
        })
        
    }
}