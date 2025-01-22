import jwt from "jsonwebtoken";

const CreateAccesToken = async (req, res) => {
  const { uid } = req.query;

  try {
    if (!uid) {
      return res
        .status(400)
        .send({ success: false, message: "Uid is required" });
    }

    const token = jwt.sign({ uid }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    const sameSiteValue =
      process.env.NODE_ENV === "production" ? "None" : "Lax";

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: sameSiteValue,
    });

    return res.send({ success: true });
  } catch (err) {
    return res
      .status(500)
      .send({ success: false, message: "Internal Server Error" });
  }
};

export default CreateAccesToken;
