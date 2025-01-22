import BlogModel from "../../models/blog.model.js";

const GetPostDetails = async (req, res) => {
    const { postId, permaLink } = req.query;
    let filterCriteria = {};
    if (postId) {
        filterCriteria._id = postId;
    }
    
    if (permaLink) {
        filterCriteria.permaLink = permaLink;
    }
    if (!postId && !permaLink) {
        return res.status(400).send({ error: 'Must provide either postId or permaLink' });
    }

    try {
        const postDetails = await BlogModel.findOne(filterCriteria);

        if (!postDetails) {
            return res.status(400).send({ error: 'Post not found' });
        }
        
        res.status(200).send(postDetails);
    } catch (err) {
        res.status(500).send({ error: 'Internal Server Error', details: err.message });
    }
};

export default GetPostDetails;
