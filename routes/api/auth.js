const express = require("express");

const router = express.Router();

const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");

router.post("/register", ctrlWrapper());
module.exports = router;
