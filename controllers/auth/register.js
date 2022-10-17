const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { User } = require("../../models/user");
const { ReqtError } = require("../../helpers");

const register = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw ReqtError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const newUser = await User.create({
    password: hashPassword,
    email,
    avatarUrl,
  });
  res.status(201).json({
    password: newUser.hashPassword,
    email: newUser.email,
    subscription: "starter",
  });
};

module.exports = register;
