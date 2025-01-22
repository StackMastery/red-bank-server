import { UserModel } from "../../models/user.model.js";

const GetAllDonors = async (req, res) => {
  const { district, upazila, blood } = req.body;
  try {
    let query = { role: { $regex: "donor", $options: "i" } };
    let andConditions = [];
    if (district) {
      andConditions.push({ district: { $regex: district, $options: "i" } });
    }
    if (upazila) {
      andConditions.push({ upazila: { $regex: upazila, $options: "i" } });
    }
    if (blood) {
      andConditions.push({ bloodGroup: { $regex: blood, $options: "i" } });
    }
    if (andConditions.length > 0) {
      query = { ...query, $and: andConditions };
    }
    const totalItems = await UserModel.countDocuments(query);
    const donors = await UserModel.find(query)
      .select({ uid: 0, role: 0 })
      .sort({ createdAt: -1 });
    res.json({
      totalItems,
      donors,
    });
  } catch (err) {
    console.error(err);
    res.json({ error: "Something went wrong" }, 500);
  }
};

export default GetAllDonors;
