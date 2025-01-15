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

const UserUpdate = async (req, res) => {
    const { uid } = req.query
    const {
        name,
        avatar,
        bloodGroup,
        district,
        upazila,
    } = req.body

    const updatedUser = await UserModel.findOneAndUpdate(
        {uid: uid},
        { $set: {
            name,
            avatar,
            bloodGroup, 
            district, 
            upazila
        }}
    )
    res.send(updatedUser)
}


export { UserDetails , UserUpdate};
