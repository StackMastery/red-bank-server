import BlogModel from '../../models/blog.model.js'

const GetBlogPostFrontend = async (req, res) => {
    try{
        const getBlogs = await BlogModel.find({status: 'published'}).select('-content').sort({createdAt: -1}).limit(req.query.limit || 3)
        res.status(200).send(getBlogs);
    }
    catch(err){
        res.status(500).send({ error: 'An error occurred while counting' });
    }
}

export default GetBlogPostFrontend