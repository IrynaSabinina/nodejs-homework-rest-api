const { ReqtError } = require("../helpers");

const authentificate = (re, res, next) => {
  try {
    const { authorization } = req.headers;
    const { bearer, token } = authorization.split(" ");
    if (bearer !== "Bearer") {
    }
  } catch (error) {
    next(error);
  }
};
