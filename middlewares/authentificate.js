const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { ReqtError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authentificate = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw ReqtError(401, "Not authorized");
    }
    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);
      if (!user || !user.token) {
        throw new Error("User not found");
      }
      req.user = user;
      next();
    } catch (error) {
      throw ReqtError(401, error.message);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authentificate;
