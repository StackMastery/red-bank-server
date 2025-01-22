import BlogModel from "../../models/blog.model.js";

const GetBlogPostFrontend = async (req, res) => {
  const { search, limit } = req.query;

  try {
    const searchQuery = search
      ? {
          $or: [
            { postTitle: { $regex: search, $options: "i" } },
            { shortDescription: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const getBlogs = await BlogModel.find({
      ...searchQuery,
      status: "published",
    })
      .select("-content")
      .sort({ createdAt: -1 })
      .limit(Number(limit) || 3);

    const blogsCountTotal = await BlogModel.countDocuments({
      ...searchQuery,
      status: "published",
    });

    res.status(200).send({
      blogsCount: blogsCountTotal,
      blogs: getBlogs,
    });
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error occurred while retrieving the blogs" });
  }
};

export default GetBlogPostFrontend;
