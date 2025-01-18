import { UserModel } from "../models/user.model.js";

const VerifyAdmin = async (uid) => {
    try {
        const adminDetails = await UserModel.findOne({ uid });
        return adminDetails?.role === "admin";
    } catch (err) {
        console.error('Error verifying admin:', err)
        return false
    }
};

export default VerifyAdmin;
