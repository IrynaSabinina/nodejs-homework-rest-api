const express = require("express");

const router = express.Router();
const cntrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(cntrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(cntrl.login)
);
module.exports = router;
