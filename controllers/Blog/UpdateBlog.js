import VerifyAdmin from "../../middlewares/verifyAdmin.js";
import VerifyVolunteer from "../../middlewares/verifyVolenteer.js";
import BlogModel from "../../models/blog.model.js";

const UpdateBlog = async (req, res) => {
  const { id, uid } = req.query;
  const updateData = req.body;

  if (!id || !updateData || !uid) {
    return res
      .status(400)
      .send({ error: "Id, uid, and updateData are required" });
  }

  try {
    const isAdmin = await VerifyAdmin(uid);
    const isVolunteer = await VerifyVolunteer(uid);

    if (isAdmin || isVolunteer) {
      try {
        const updatedBlog = await BlogModel.findByIdAndUpdate(id, updateData, {
          new: true,
        });

        if (!updatedBlog) {
          return res.status(404).send({ error: "Blog not found" });
        }

        return res.send({ success: true, data: updatedBlog });
      } catch (err) {
        return res.status(500).send({ error: "Error updating the blog" });
      }
    } else {
      return res.status(403).send({ error: "Unauthorized user" });
    }
  } catch (err) {
    return res.status(500).send({ error: "Error verifying user" });
  }
};

export default UpdateBlog;
