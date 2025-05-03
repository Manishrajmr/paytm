const express =require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{console.log("db connected")})
.catch((err)=>{
   console.log("db not connected",err.message);
   console.error();
   process.exit(1);
});

const userSchema = mongoose.Schema({
    email:String,
    passWord:String,
    firstName:String,
    lastName:String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model("user",userSchema);

module.exports = {
    User,
    Account
}