const express =require('express');
const router  = express.Router();
const zod = require('zod');
const {User} = require("../db");
const JWT_SECRET = require('../config');
const jwt = require('jsonwebtoken');
const {Account} = require("../db");

const {authMiddleware} = require("../middleware");

//signup login routes  

// const signupSchema = zod.object({
//     username:zod.String(),
//     passWord:zod.String(),
//     firstName:zod.String(),
//     lastName:zod.String() 
// })

router.post('/signup',async (req,res)=>{
    // Zod ka safeParse() method tumhare provided data ko validate karta hai aur hamesha ek object return karta hai jisme do cheezein hoti hain:
    const body = req.body;

    // const result = signupSchema.safeParse(req.body);
    // console.log(result);

    // {
    //     success: true,
    //     data: {
    //       username: 'rahul123',
    //       password: 'abc123',
    //       firstName: 'Rahul'
    //     }
    //   }

    // {
    //     success: false,
    //     error: {
    //       issues: [/* error details */],
    //       name: 'ZodError',
    //       /* aur bhi info hoti hai */
    //     }
    //   }

//   if (!result.success) {
//     return res.status(400).json({ error: result.error });
//   }

    // data validated
    // const { username, password, firstName } = result.data;

    const exitingUser = await User.findOne({email:body.email});

    if(exitingUser){
         return res.json({
            status:false,
            message:"user already exist"
         })
    }

    const user = await User.create(body);

    const payload = {
       userId :user._id
    }


    		/// ----- Create new account ------

            await Account.create({
                userId:payload.userId,
                balance: 1 + Math.random() * 10000
            })
        

    const token = jwt.sign(payload,JWT_SECRET);

    res.json({
        message:"user created..",
        token:token

    })

  res.json({ message: 'Signup successful!' });

})


//login route handle

router.post('/login',async (req,res)=>{

    const {email, passWord} = req.body;

    if(!email || !passWord){
        return res.status(404).json({
            status:false,
            message:"enter the both email and password"
        })
    }

    //check for registered user

    try{
        const user = await User.findOne({email});

    console.log(user);

    if(!user){
        return res.status(401).json({
            status:false,
            message:"user not registered"
        })
    }


    const payload = {
        userId:user._id
    }

    if(passWord == user.passWord){

        let token =  jwt.sign(payload,JWT_SECRET);
        
        return res.json({
            success: true,
            message: "Login successful",
            token: token
        });
    }

    else{
        return res.status(401).json({
        success: false,
        message: "Invalid password"
    });
    }


    // user.token = token;
    // user.password = undefined;


    // const options = {
    //     expires: new Date(Date.now()+3*24*60*60*100),
    //     httpOnly:true
    // }

    // res.cookie("cookies", token, options).status(3007).json({
    //     success:true,
    //     token,
    //     user,
    //     message:'user Logged in successfully',
    // });

    // console.log(user);


    }
    catch(error){
        console.log(error)
    };


    

})


// other auth routes

const updateBody = zod.object({
	passWord: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    return res.json({
        message: "Updated successfully"
    })
})




router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})



module.exports = router;