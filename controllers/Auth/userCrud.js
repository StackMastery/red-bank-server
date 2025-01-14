import { UserModel } from "../../models/user.model.js";

const UserDetails = async (req, res) => {
    const { uid } = req.query;

    try {        
        const user = await UserModel.findOne({ uid });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error", error: err.message });
    }
};

export { UserDetails };
