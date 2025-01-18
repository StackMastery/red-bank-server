import BlogModel from "../../models/blog.model.js";

const GetPostDetails = async (req, res) => {
    const { postId } = req.query;

    if (!postId) {
        res.send({ error: 'must give a postId' }, 400);
        return;
    }

    try {
        const postDetails = await BlogModel.findById(postId);
        if (!postDetails) {
            res.send({ error: 'Post not found' }, 400);
            return;
        }
        res.send(postDetails);
    } catch (err) {
        res.send({ error: 'Internal Server Error', details: err.message }, 500);
    }
};

export default GetPostDetails;
