const User = require('../models/File');


// const addUser = async (req, res) => {
//     const { email,username,password } = req.body;
//     try {
//         if(await User.findOne({email:email}))
//     } catch (error) {  // if any internal error
//         res.status(400).send({
//             status: false,
//             message: `Error : ${error.message}`
//         })
//     }
// }

module.exports = {
    addUser,
    getUser,
    updateUser
}


