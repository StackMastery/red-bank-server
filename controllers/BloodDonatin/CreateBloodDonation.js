import BloodDonation from "../../models/blooddDonation.model.js";
import { UserModel } from "../../models/user.model.js";

const CreateBloodDonation = async (req, res) => {
  const {
    authorEmail,
    authorName,
    donationDate,
    donationMsg,
    donationTime,
    fullAddress,
    hospitalName,
    recEmail,
    recName,
    recUpazila,
    recDistrict,
    bloodGroupe,
    authorAvatar,
  } = req.body;

  const requiredFields = [
    authorEmail,
    authorName,
    donationDate,
    donationMsg,
    donationTime,
    fullAddress,
    hospitalName,
    recEmail,
    recName,
    bloodGroupe,
    recDistrict,
    recUpazila,
  ];

  if (requiredFields.some((field) => !field)) {
    return res.status(400).send("All fields are required");
  }

  try {
    const findUser = await UserModel.findOne({ email: authorEmail });

    if (!findUser?.status) {
      res.send({ error: "Must your account will be active" }, 400);
    }

    const newDonation = new BloodDonation({
      authorEmail,
      authorName,
      donationDate,
      donationMsg,
      donationTime,
      fullAddress,
      hospitalName,
      recEmail,
      recName,
      recDistrict,
      recUpazila,
      authorAvatar,
      bloodGroupe,
    });
    const donation = await newDonation.save();

    res.status(201).send(donation);
  } catch (error) {
    res.status(500).send("Server error: " + error.message);
  }
};

export default CreateBloodDonation;
