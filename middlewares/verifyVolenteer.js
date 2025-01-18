import { UserModel } from "../models/user.model.js";

const VerifyVolunteer = async (uid) => {
    try {
        const volunteerDetails = await UserModel.findOne({ uid });
        return volunteerDetails?.role === "volunteer";
    } catch (err) {
        console.error('Error verifying admin:', err)
        return false
    }
};

export default VerifyVolunteer;
