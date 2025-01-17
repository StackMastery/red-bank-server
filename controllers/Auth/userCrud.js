import VerifyAdmin from "../../middlewares/verifyAdmin.js";
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

const UpdateUserRole = async (req, res) => {
    const { id, uid } = req.query;
    const { role } = req.body;

    if (!id || !role || !uid) {
        return res.status(400).send({ error: 'Id, uid, and role are required' });
    }

    try {
        const isAdmin = await VerifyAdmin(uid);

        if (!isAdmin) {
            return res.status(403).send({ error: 'Unauthorized' });
        }

        const updateRole = await UserModel.findOneAndUpdate(
            { _id: id },
            { $set: { role: role } },
            { new: true }
        );

        if (!updateRole) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.send({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal server error' });
    }
}



export { UserDetails , UserUpdate, UpdateUserRole};
