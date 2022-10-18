const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");
const { ReqtError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw ReqtError(401, "Email or password is wrong");
  }
  if (!user.verify) {
    throw ReqtError(401, "Email not verify");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw ReqtError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.signt(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
    user: {
      email,
      subscription: "starter",
    },
  });
};
module.exports = login;
