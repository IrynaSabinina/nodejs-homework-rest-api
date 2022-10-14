const { Contact } = require("../models/contact");
const { ReqtError } = require("../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw ReqtError(404);
  }
  res.json({
    message: "Contact is deleted",
  });
};

module.exports = removeById;
