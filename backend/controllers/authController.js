import User from "../models/User.js";
import bcrypt from "bcryptjs";
export const register= async (req, res) => {

    try {
        const salt=  bcrypt.genSaltSync(10);
        const hash=  bcrypt.hashSync(req.body.password, salt);

        const newUser= new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        });

        await newUser.save();
        res.status(200).json({success: true, message: "Successfully created"});
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to create. Try again"});
    }
}

export const login= async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({email});
        if(!user) {
            res.status(404).json({success: false, message: "User not found"});
        }

        const checkCorrectPassword=  bcrypt.compare(req.body.password, user.password);

        if(!checkCorrectPassword) {
            return res.status(401).json({success: false, message: "Incorrect email or password"});  
        }

        
    } catch (err) {
        
    }
}