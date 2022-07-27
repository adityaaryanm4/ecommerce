const express = require("express")
const router = express.Router()

const Product = require("../models/product")

// CREATE
router.post("/", async (req, res) => {
    try {
        const newRecord = new Product(req.body)
        const savedRecord = await newRecord.save()
        res.status(200).json(savedRecord)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// UPDATE
router.put("/:_id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params._id,
            { $set: req.body }, { new: true }
        )
        res.status(200).json(updatedProduct)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// DELETE
router.delete("/:_id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params._id)
        res.status(200).json("Product has been deleted")

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET PRODUCT
router.get("/find/:_id", async (req, res) => {
    try {
        const product = await Product.findById(req.params._id)
        res.status(200).json(product)

    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products
        if (qNew) {
            products = await Product.find().sort({ _id: -1 }).limit(5)
        } else if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory] } })
        } else {
            products = await Product.find()
        }
        res.status(200).json(products)

    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router

