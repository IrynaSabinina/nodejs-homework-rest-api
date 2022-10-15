const User = require("../../models/user");
const { ReqtError } = require("../../helpers");
const { json } = require("express");
const register = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw ReqtError(409, "Email in use");
  }
  const newUser = await User.create({ password, email });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: "starter",
    },
  });
};

module.exports = register;
