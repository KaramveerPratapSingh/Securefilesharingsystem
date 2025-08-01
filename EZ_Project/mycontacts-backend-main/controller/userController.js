const asynchandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


//@desc Register a user
//@route POST /api/user/register
//@access public

const registerUser = asynchandler(async (req,res)=>{
    const {username,email,password} = req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("all foelds are mandotary!")

    }
    const useravailable = await User.findOne({email});
    if(useravailable){
         res.status(400);
        throw new Error("User already registered");

    }
    //Hash password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password: ", hashPassword);
    const user = await User.create({
        username,
        email,
        password: hashPassword,
    });
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json ({ _id: user.id,email: user.email});
    }
    else{
        res.status(400);
        throw new Error("Usre data is not valid")
    }

    res.json({ message: "Register the user" });
});

//@desc Login a user
//@route POST /api/user/login
//@access public

const loginUser = asynchandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All feilds are mandotary");
    }
    const user = await User.findOne({ email });
    //compare password with hashedpassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            {
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
    );
        res.status(200).json({ accessToken });
    }else{
        res.status(401);
        throw new Error("email or password is not valid");
    }
    
});



//@desc Current user info
//@route GET /api/user/current
//@access private

const currentUser = asynchandler(async (req,res)=>{
    res.json(req.user);
});


module.exports = {registerUser,loginUser,currentUser};