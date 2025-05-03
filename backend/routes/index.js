const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const accountRouter = require("./account")


// Part	Matlab
// router	Ek Express router object hai (jo index.js mein banaya gaya hai)
// .use()	Express ka ek function hai jo middleware ya sub-router ko use karne ke liye hota hai
// '/user'	Yeh prefix hai — har route jo userRouter mein likha gaya hai, uske aage /user lag jaayega
// userRouter	Yeh ek imported router hai jo user.js file se aaya hai, jisme signup/login jaise routes hain
router.use('/user',userRouter);
router.use("/account", accountRouter);


module.exports = router;

// /api/v1/user/signup
// /api/v1/user/login
// / api/v1/user/changePassword..

// //api/v1/account/transferMoney