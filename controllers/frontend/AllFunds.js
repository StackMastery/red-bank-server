import FundModel from "../../models/fund.model.js";

const AllFunds = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  if (!page || page < 1 || !limit || limit < 1) {
    res.status(400).send({ error: "Page and limit must be positive numbers" });
    return;
  }

  try {
    const funds = await FundModel.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalItems = await FundModel.countDocuments();

    res.json({
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      funds,
    });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while fetching funds" });
  }
};

export default AllFunds;
