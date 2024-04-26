const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

module.exports = {
    registerUser: async (req, res) => {
        try {
            const user = new User(req.body)
            const newUser = await user.save()
            const userToken = jwt.sign({id: newUser._id}, SECRET)
            res.status(201).cookie("userToken",
                userToken, {httpOnly: true}).json({message: "Registration successful"})
        }
        catch (error) {
            res.status(400).json({error: error})
        }
    },
    loginUser: async (req, res) => {
        const userFromDB = await User.findOne({email: req.body.email});
        if (!userFromDB) {
            res.status(400).json({error: "Email does not exist"})
        }
        else {
            try {
                const isPasswordValid = await bcrypt.compare(req.body.password, userFromDB.password);
                if (isPasswordValid) {
                    const userToken = jwt.sign({id: userFromDB._id}, SECRET);
                    res.status(201).cookie("userToken", userToken, {httpOnly: true}).json({message: "Login Successful"})
                }
                else {
                    res.status(400).json({error: "Password is wrong"})
                }
            } catch (error) {
                res.status(400).json({message: "Invalid Email/Password"})
            }
        }
    },
    logoutUser: async (req, res) => {
        // console.log(req.cookies.userToken)
        res.clearCookie("useToken");
        res.json({successMessage: "User Logged out"})
    }
}
