const express = require("express")
const router = express.Router()

const stripe = require("stripe")(process.env.STRIPE_KEY)

const DOMAIN = "http://localhost:3000"

router.post('/create-checkout-session', async (req, res) => {

  const { products, cartQuantity, cartTotal } = req.body

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: products.map(product => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount: cartTotal,
        },
        quantity: cartQuantity,
      }
    }),
    mode: 'payment',
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/cancel`,
  });
  res.json({pi:session.payment_intent,url:session.url});
});

router.get('/:paymentIntent', async (req, res) => {
  console.log(req.params.paymentIntent)
  const paymentIntent = await stripe.paymentIntents.retrieve(
    req.params.paymentIntent
  );
  console.log(paymentIntent)
  res.json(paymentIntent);
});



module.exports = router