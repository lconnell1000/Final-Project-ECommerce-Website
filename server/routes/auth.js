const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//register new user route
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
             process.env.PASS_SECRET).toString(),
    });
    try{
        const savedUser = await newUser.save();
       res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// Login route

router.post("/login", async (req,res) => {
    try {
    const user = await User.findOne({username: req.body.username});
    !user && res.status(401).json("Incorrect Username");
    const hashedPass = 
    CryptoJS.AES.decrypt
    (user.password, process.env.PASS_SECRET);

    const decryptPassword = hashedPass.toString(CryptoJS.enc.Utf8);

    decryptPassword !==req.body.password && res.status(401).json("Incorrect Password");

    const { password, ...allExceptPass } = user._doc;

    res.status(200).json(allExceptPass);
    }
    catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router