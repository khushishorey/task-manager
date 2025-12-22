
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async(req,res) => {
    const {name, email, password} = req.body;

    try {
        const userExist = await User.findOne({email});
        if(userExist) {
            return res.status(400).json({message: "User with this email already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });

        res.status(201).json({message: "User registered successfully"});
    } catch(error){
        res.status(500).json({message:"Server error"});
    }
}

const loginUser = async (req,res) => {
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) {
          return res.status(400).json({message: "Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
          return res.status(400).json({message: "Invalid Credentials"});
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );
        res.json({token});
    } catch(error) {
        res.status(500).json({message:"Server error"});
    } 
}

module.exports = {registerUser, loginUser}