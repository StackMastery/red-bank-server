import dotenv from "dotenv";
import Stripe from "stripe";
import FundModel from "../../models/fund.model.js";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const CreateStripePayment = async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(amount) * 100,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
    });
  } catch (err) {
    res.status(500).send({
      error: "Failed to create payment intent.",
      message: err.message,
    });
  }
};

const ConfirmAndSaveFund = async (req, res) => {
  try {
    const { paymentIntentId, ammount, note, customer, avatar } = req.body;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).send({ error: "Payment not completed." });
    }
    const newFund = new FundModel({
      name: customer,
      avatar: avatar,
      note: note,
      ammount: parseInt(ammount) || 0,
    });

    const fund = await newFund.save();

    if (!fund) {
      return res
        .status(400)
        .send({ error: "Something went wrong while saving the fund." });
    }

    res.status(200).send(fund);
  } catch (err) {
    res.status(500).send({
      error: "Failed to save fund.",
      message: err.message,
    });
  }
};

export { CreateStripePayment, ConfirmAndSaveFund };
