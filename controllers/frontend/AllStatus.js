import BloodDonation from "../../models/blooddDonation.model.js";
import { UserModel } from "../../models/user.model.js";

const GetAllStatus = async (req, res) => {
    try {
        const countTotalDonors = await UserModel.countDocuments({ role: 'donor' });
        const countDonationReqDone = await BloodDonation.countDocuments({ status: 'done' });
        
        res.status(200).send({ 
            totalDonors: countTotalDonors,
            totalDonationReqDone: countDonationReqDone
        });
        
    } catch (err) {
        res.status(500).send({ error: 'An error occurred while counting' });
    }
}

export { GetAllStatus }