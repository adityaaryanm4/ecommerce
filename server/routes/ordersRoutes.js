const express = require("express")
const router = express.Router()

const Order = require("../models/order")
const stripe = require("stripe")(process.env.STRIPE_KEY)
const { verifyTokenAndAuthorisation, verifyToken, verifyTokenAndAdmin } = require("./verifyToken")

// CREATE
router.post("/", verifyToken, async (req, res) => {

    const paymentIntent = await stripe.paymentIntents.retrieve(
        req.body.paymentIntent
    );
    console.log(paymentIntent)
    const { products, userId } = req.body
    const order = {
        userId,
    }
    try {
        // const newRecord = new Order(req.body)
        // const savedRecord = await newRecord.save()
        // res.status(200).json(savedRecord)
        res.json(paymentIntent)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// UPDATE
router.put("/:_id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params._id,
            { $set: req.body }, { new: true }
        )
        res.status(200).json(updatedOrder)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// DELETE
router.delete("/:_id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params._id)
        res.status(200).json("Order has been deleted")

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId })
        res.status(200).json(Order)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(Orders)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET AMONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date() //like: Aug. 1st
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1)) //this'll be: July 1st
    const secLastMonth = new Date(date.setMonth(lastMonth.getMonth() - 1))//this'll be: June1st


    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: secLastMonth } } }, //getting all orders which were created after/on second last month i.e. June  1st
            {
                $project: {
                    month: { $month: "$createdAt" },   //using $month method, extracted month value from createdAt field and put into "month" variable
                    sales: "$amount"                   //put value of amount field in sales variable
                }
            },
            { $group: { _id: "$month", totalSales: { $sum: "$sales" } } } //we'll group using month field. then, apply $sum method on their sales field
            //in this case, we'll hv 2 groups. June and July. and each will hv its total sale
        ])
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
