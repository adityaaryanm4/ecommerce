const express = require("express")
const router = express.Router()

const User = require("../models/user")
// const { verifyToken } = require("./verifyToken")

const bcrypt = require("bcrypt")
const saltRound = 10

//UPDATE
router.put("/:_id", async (req, res) => {
    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, saltRound)
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params._id,
            { $set: req.body }, { new: true }
        )
        res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json(error)
    }
})

//DELETE
router.delete("/:_id", async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params._id)
        res.status(200).json("User deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET USER
router.get("/find/:_id", async (req, res) => {
    try {
        const user = await User.findById(req.params._id)
        const { password, ...others } = user._doc
        res.status(200).json(others)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET ALL USERS
router.get("/", async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
        res.status(200).json(users)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET USER STATS
router.get("/stats", async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { _id: "$month", total: { $sum: 1 } } }
        ])
        res.status(200).json(data)

    } catch (error) {
        return res.status(500).json(error)
    }
})











module.exports = router