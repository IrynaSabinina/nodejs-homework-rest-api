const { User } = require("../../models/user");
const { ReqtError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verifiationToken } = req.params;
  const user = await User.findOne({ verifiationToken });
  if (!user) {
    throw ReqtError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verifiationToken: "",
  });
  res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
