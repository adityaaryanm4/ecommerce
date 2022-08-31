const express = require("express")
const router = express.Router()

const stripe = require("stripe")(process.env.STRIPE_KEY)

const { verifyToken } = require("./verifyToken")

router.post('/create-checkout-session', verifyToken, async (req, res) => {
  try {
    const { products } = req.body

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map(product => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.title,
            },
            unit_amount: product.price * 100,
          },
          quantity: product.amount,
        }
      }),
      mode: 'payment',
      success_url: `https://karashop.netlify.app/success`,
      cancel_url: `https://karashop.netlify.app/cancel`,
    });
    res.json({ pi: session.payment_intent, url: session.url });

  } catch (error) {
    res.status(500).json(error)
  }

});



module.exports = router