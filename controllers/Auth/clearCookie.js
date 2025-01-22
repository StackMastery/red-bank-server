const ClearCookie = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      secure: process.env.NODE_ENV === "production",
    })
    .send({ success: true });
};

export default ClearCookie;
