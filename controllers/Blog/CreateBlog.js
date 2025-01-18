import BlogModel from "../../models/blog.model.js";

const CreateBlog = async (req, res) => {
    const {
        postTitle,
        permaLink,
        thumb,
        status,
        shortDescription,
        content,
        timeToRead,
    } = req.body;

    if (!postTitle || !permaLink || !thumb) {
        res.status(400).send({ error: 'Please provide postTitle, permaLink, and thumb' });
        return;
    }

    try {
        const blogNew = new BlogModel(req.body);
        const blog = await blogNew.save();
        res.status(201).send(blog);
    } catch (err) {
        res.status(500).send({ error: 'An error occurred while creating the blog', details: err.message });
    }
};

export default CreateBlog;
