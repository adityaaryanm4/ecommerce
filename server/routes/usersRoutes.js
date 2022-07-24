const express = require("express")
const router = express.Router()

const User = require("../models/user")
const { verifyToken } = require("./verifyToken")

router.put("/:_id",verifyToken,(req,res)=>{
    

})












module.exports = router