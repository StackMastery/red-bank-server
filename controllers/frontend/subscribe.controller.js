import Subscribe from "../../models/subscribe.model.js";

const SubscribeController = async (req, res) => {
  const { email } = req.body;

  try {
    const newSub = new Subscribe({
      email: email,
    });
    const savedSub = await newSub.save();
    res
      .status(201)
      .json({ message: "Subscription successful", data: savedSub });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "Email already subscribed", code: err.code });
    }
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

export default SubscribeController;
