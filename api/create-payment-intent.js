require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(request, response) {
  try {
    const amount = JSON.parse(request.body.amount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    response.status(200);
    response.json(JSON.parse(JSON.stringify({ paymentIntent })));
  } catch (error) {
    response.status(400);
    response.json(JSON.parse(JSON.stringify({ error })));
  }
}
