const express = require("express")
const router = express.Router()

const User = require("../models/user")

const bcrypt = require("bcrypt")
const saltRound = 10

const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    const hash = await bcrypt.hash(password, saltRound)

    const newRecord = new User({ username, email, password: hash })
    try {
        const result = await newRecord.save()
        res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (user) {
            const result = await bcrypt.compare(password, user.password)

            if (result === true) {
                const { password, ...others } = user._doc
                const token = await jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SEC, { expiresIn: "3d" })
                res.status(200).send({...others,token})
            }
            else
                res.send("Invalid ceredentials")
        }
        else {
            res.send("Invalid ceredentials")
        }
    } catch (error) {
        res.status(500).send(error)
    }

})


module.exports = router
