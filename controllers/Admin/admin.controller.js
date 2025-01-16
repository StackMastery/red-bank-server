import VerifyAdmin from "../../middlewares/verifyAdmin.js";
import BloodDonation from "../../models/blooddDonation.model.js";
import { UserModel } from "../../models/user.model.js";

const DashboardOverview = async (req, res) => {
    const { uid } = req.query;

    try {

        const isAdmin = await VerifyAdmin(uid);

        if (!isAdmin) {
            return res.status(403).send({ error: 'Unauthorized' });
        }

        const countTotalDonors = await UserModel.countDocuments({ role: 'donor' })
        const countDonationReq = await BloodDonation.countDocuments()

        res.status(200).send({ 
            totalDonors: countTotalDonors ,
            totalDonationReq: countDonationReq
        });

    } catch (err) {
        res.status(500).send({ error: 'An error occurred while counting' });
    }
};


const GetAllUserPaginated = async (req, res) => {
    const page = parseInt(req.query?.page) || 1;
    const limit = parseInt(req.query?.limit) || 10;

    if (!page || !limit) {
        return res.status(400).send({ error: "Page and limit required" });
    }

    try {
        const query = {};
        const search = req.query.search || ''; // Use the search query from the frontend

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        const users = await UserModel.find(query)
            .skip((page - 1) * limit)
            .limit(limit);

        const totalItems = await UserModel.countDocuments(query);

        res.json({
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
            users,
        });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred' });
    }
};


export { DashboardOverview, GetAllUserPaginated };

