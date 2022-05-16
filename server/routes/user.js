const User = require("../models/User");

const {
  verifyTokenAndAuthorization, verifyTokenAndAdmin,
} = require("./verifyJWT");

const router = require("express").Router();

//UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req,res) => {
try{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User Deleted")
}catch{
    res.status(500).json(err)
}
});

//GET A SINGLE USER
router.get("/find/:id", verifyTokenAndAdmin, async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const { password, ...allExceptPass } = user._doc;
        res.status(200).json(allExceptPass)
    }catch (err){
        res.status(500).json(err)
    }
    });

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req,res) => {
    const query = req.query.new
    try{
        const users = query 
        //if we want to show the latest 5 users to sign up
        ? await User.find().sort({_id:-1}).limit(5)
        //if we want to show all users
        : await User.find();
        res.status(200).json(users)
    }catch (err){
        res.status(500).json(err)
    }
    });

module.exports = router