const User = require('../models/User');

const addUser = async (req, res) => {
    const { email, username, password } = req.body;
    try {
        if ((await User.findOne({ email: email })) != null) { //  if user already exists
            res.status(400).send({
                status: false,
                message: `User already exists`
            })
        } else {
            const user = new User({ email: email, username: username, password: password }) //  create new user in database
            await user.save()
            res.status(201).send({
                status: true,
                id: user._id, // return id of user for future use
                message: `User created`
            })
        }
    } catch (error) {  // if any internal error
        res.status(400).send({
            status: false,
            message: `Error : ${error.message}`
        })
    }
}

const getUser = async (req, res) => {
    try {
        if (!req.body.id.match(/^[0-9a-fA-F]{24}$/)) {  // if invalid id is provided
            res.status(400).send({
                status: false,
                message: "Invalid Id"
            })
        } else {
            const user = await User.findById(req.body.id, '_id email username files')
            if (user === null) {  // if user is not found in database
                res.status(400).send({
                    status: false,
                    message: "User not found"
                })
            } else {  // if user is found in database
                res.status(200).send({
                    status: true,
                    user: user
                })
            }
        }
    } catch (error) {
        res.status(400).send({
            status: false,
            message: `Error : ${error.message}`
        })
    }


}
const updateUser = async (req, res) => {
    res.status(200).send({
        status: true,
        message: 'api called sucessfully'
    })
}

module.exports = {
    addUser,
    getUser,
    updateUser
}


