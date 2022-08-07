require("dotenv").config()
const express = require("express");
const app = express()

const connectDB = require("./db")
connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const cors = require("cors")
app.use(cors());

const usersRoutes = require("./routes/usersRoutes")
app.use("/api/user",usersRoutes)

const authRoutes = require("./routes/authRoutes")
app.use("/api/auth",authRoutes)

const productsRoutes = require("./routes/productsRoutes")
app.use("/api/product",productsRoutes)

const stripeRoutes = require("./routes/stripeRoutes")
app.use("/api/checkout",stripeRoutes)

const cartRoutes = require("./routes/cartRoutes")
app.use("/api/cart",cartRoutes)

const ordersRoutes = require("./routes/ordersRoutes")
app.use("/api/order",ordersRoutes)



const PORT = 5000
app.listen(PORT, ()=>{console.log(`Server started at PORT ${PORT}`)})