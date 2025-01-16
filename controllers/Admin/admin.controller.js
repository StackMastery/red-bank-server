import BloodDonation from "../../models/blooddDonation.model.js";
import { UserModel } from "../../models/user.model.js";

const DashboardOverview = async (req, res) => {
    const { uid } = req.query;

    try {

        const adminDetails = await UserModel.findOne({uid: uid})

        if(adminDetails?.role !== "admin"){
            res.send({error: "Unautorized"}, 402)
            return
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

export { DashboardOverview };
