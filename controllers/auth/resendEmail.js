const { User } = require("../../models/user");
const { ReqtError, sendEmail, creatVerifyEmail } = require("../../helpers");
const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw ReqtError(400, "missing required field email");
  } else if (!user.verify) {
    throw ReqtError(400, "Verification has already been passed");
  }

  const mail = creatVerifyEmail(email, user.verificationToken);

  await sendEmail(mail);
  res.json({
    message: "Verification email sent",
  });
};
module.exports = resendEmail;
