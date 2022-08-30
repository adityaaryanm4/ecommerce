const express = require("express")
const router = express.Router()

const Cart = require("../models/cart")
const { verifyToken, verifyTokenAndAuthorisation, verifyTokenAndAdmin } = require("./verifyToken")

// CREATE
router.post("/",verifyToken, async (req, res) => {
    try {
        const newRecord = new Cart(req.body)
        const savedRecord = await newRecord.save()
        res.status(200).json(savedRecord)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// UPDATE
router.put("/:_id",verifyTokenAndAuthorisation, async (req, res) => {             // this "_id" refers to userId
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.body.cartId,
            { $set: req.body.prodObj }, { new: true }
        )
        res.status(200).json(updatedCart)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// DELETE
router.delete("/:_id",verifyTokenAndAuthorisation, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params._id)
        res.status(200).json("Cart has been deleted")

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET USER CART
router.get("/find/:_id",verifyTokenAndAuthorisation, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId:req.params._id})
        res.status(200).json(cart)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET ALL CARTS
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router

