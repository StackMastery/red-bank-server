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
        res.status(500).send({ error: "An error occurred while fetching donations"});
    }
};

export { GetBloodDonationForDonor };
