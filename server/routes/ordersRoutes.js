const express = require("express")
const router = express.Router()

const Order = require("../models/order")
const stripe = require("stripe")(process.env.STRIPE_KEY)
const { verifyTokenAndAuthorisation, verifyToken, verifyTokenAndAdmin } = require("./verifyToken")

// CREATE
router.post("/", verifyToken, async (req, res) => {
    const { products, userId, paymentIntent } = req.body

    const billingDetails = await stripe.paymentIntents.retrieve(
        paymentIntent
    );
    const products2 = products.map(product => ({ productId: product._id, quantity: product.amount }))

    const order = {
        userId,
        products: products2,
        amount: (billingDetails.amount) / 100,
        address: billingDetails.charges.data[0].billing_details.address
    }
    try {
        const newRecord = new Order(order)
        const savedRecord = await newRecord.save()
        res.status(200).json(savedRecord)

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
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET MONTHLY INCOME
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
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
