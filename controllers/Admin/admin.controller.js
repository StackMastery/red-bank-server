import VerifyAdmin from "../../middlewares/verifyAdmin.js";
import BloodDonation from "../../models/blooddDonation.model.js";
import { UserModel } from "../../models/user.model.js";

const DashboardOverview = async (req, res) => {
    const { uid } = req.query;    
    try {
        const countTotalDonors = await UserModel.countDocuments({ role: 'donor' });
        const countDonationReq = await BloodDonation.countDocuments();

        res.status(200).send({ 
            totalDonors: countTotalDonors,
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

    const isAdmin = await VerifyAdmin(req.query?.uid);

    if (!isAdmin) {
        return res.status(403).send({ error: 'Unauthorized' });
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

        const users = await UserModel.find(query).sort({createdAt: -1})
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


const GetAllDonationReqPaginated = async (req, res) => {
    const page = parseInt(req.query?.page, 10) || 1;
    const limit = parseInt(req.query?.limit, 10) || 10;

    if (page <= 0 || limit <= 0) {
        return res.status(400).send({ error: "Valid page and limit are required" });
    }

    try {
        const donations = await BloodDonation.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();

        const totalItems = await BloodDonation.countDocuments().exec();

        res.json({
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
            donations,
        });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred' });
    }
};




export { DashboardOverview, GetAllUserPaginated , GetAllDonationReqPaginated};

