const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, authentificate } = require("../../middlewares");

const { schemas } = require("../../models/user");
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);
router.get("/current", authentificate, ctrlWrapper(ctrl.current));
router.get("/logout", authentificate, ctrlWrapper(ctrl.logout));
module.exports = router;
