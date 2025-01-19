import BlogModel from '../../models/blog.model.js';

const GetAllPostPaginated = async (req, res) => {
    const page = parseInt(req.query?.page, 10) || 1;
    const limit = parseInt(req.query?.limit, 10) || 10;
    const search = req.query.search

    if (page <= 0 || limit <= 0) {
        return res.status(400).send({ error: "Valid page and limit are required" });
    }

    try {

        let query = {};
        if (search) {
            query.$or = [
                { postTitle: { $regex: search, $options: 'i' } },
                { shortDescription: { $regex: search, $options: 'i' } },
                { permaLink: { $regex: search, $options: 'i' } }
            ];
        }       

        const totalItems = await BlogModel.countDocuments()
        const blogs = await BlogModel.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });

        res.json({
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
            blogs,
        });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching the posts' });
    }
};

export default GetAllPostPaginated;
