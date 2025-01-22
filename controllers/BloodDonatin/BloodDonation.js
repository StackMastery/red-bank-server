import VerifyAdmin from "../../middlewares/verifyAdmin.js";
import BloodDonation from "../../models/blooddDonation.model.js";

const GetBloodDonationForDonor = async (req, res) => {
  const { email, limit } = req.query;

  if (!email) {
    res.status(400).send({ error: "Email is required" });
    return;
  }

  try {
    const Donations = await BloodDonation.find({ authorEmail: email })
      .sort({ createdAt: -1 })
      .limit(parseInt(limit) || 0);
    res.status(200).send(Donations);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching donations" });
  }
};

const DeleteDonationReq = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).send({ error: "Object ID is required" });
    }

    const deleteResult = await BloodDonation.deleteOne({ _id: id });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).send({ error: "Donation request not found" });
    }

    res.send({
      message: "Donation request deleted successfully",
      data: deleteResult,
    });
  } catch (error) {
    res
      .status(500)
      .send({
        error: "An error occurred while deleting the donation request",
        details: error.message,
      });
  }
};

const GetBLoodDonationReqDetails = async (req, res) => {
  const { id, email, uid } = req.query;
  const isAdmin = await VerifyAdmin(uid);
  try {
    const details = await BloodDonation.findById(id);
    if (isAdmin) {
      res.send(details);
      return;
    }

    if (details?.authorEmail === email) {
      res.send(details);
      return;
    }
    res.send({ error: "unauthorized user" }, 402);
  } catch (err) {
    res.send({ error: "Somethign went wrong" }, 400);
  }
};

const UpdateDonationRequest = async (req, res) => {
  const { uid, id } = req.query;

  if (!id) {
    return res.status(400).send({ error: "Id is required" });
  }

  try {
    const updatedDonation = await BloodDonation.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, upsert: true }
    );

    if (!updatedDonation) {
      return res.status(404).send({ error: "Donation record not found" });
    }

    res.status(200).send(updatedDonation);
  } catch (error) {
    res
      .status(500)
      .send({
        error: "Failed to update donation record",
        message: error.message,
      });
  }
};

const PaginatedBloodDonation = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  if (!page || !limit) {
    res.status(400).send({ error: "Page and limit required" });
    return;
  }

  try {
    const query = req.query.email ? { authorEmail: req.query.email } : {};

    const donations = await BloodDonation.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalItems = await BloodDonation.countDocuments(query);

    res.json({
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      donations,
    });
  } catch (err) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export {
  GetBloodDonationForDonor,
  DeleteDonationReq,
  GetBLoodDonationReqDetails,
  UpdateDonationRequest,
  PaginatedBloodDonation,
};
