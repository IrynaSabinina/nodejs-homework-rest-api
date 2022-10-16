const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, authentificate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authentificate, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", authentificate, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authentificate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.add)
);

router.delete("/:contactId", authentificate, ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  authentificate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/: contactId / favorite",
  authentificate,
  ctrlWrapper(ctrl.updateStatusContact)
);
module.exports = router;
