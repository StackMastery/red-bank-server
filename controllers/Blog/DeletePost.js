import VerifyAdmin from "../../middlewares/verifyAdmin.js";
import BlogModel from '../../models/blog.model.js';

const DeletePost = async (req, res) => {
    const { id, uid } = req.query;

    try {
        if (!id || !uid) {
            return res.status(400).send({ error: 'Must provide Post ID and UID' });
        }

        const isAdmin = await VerifyAdmin(uid);
        if (!isAdmin) {
            return res.status(403).send({ error: 'Unauthorized User' });
        }

        const deleteResult = await BlogModel.deleteOne({ _id: id });

        if (deleteResult.deletedCount === 0) {
            return res.status(404).send({ error: 'Post not found' });
        }

        res.status(200).send({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).send({ error: 'An error occurred while deleting the post' });
    }
};

export default DeletePost;
