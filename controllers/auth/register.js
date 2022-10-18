const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
const { ReqtError, sendEmail, creatVerifyEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw ReqtError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const veryficationToken = nanoid();

  const newUser = await User.create({
    password: hashPassword,
    email,
    avatarUrl,
    veryficationToken,
  });

  const mail = creatVerifyEmail(email, verificationToken);

  await sendEmail(mail);

  res.status(201).json({
    password: newUser.hashPassword,
    email: newUser.email,
    subscription: "starter",
  });
};

module.exports = register;
