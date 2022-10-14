const { Contact } = require("../models/contact");
const { ReqtError } = require("../helpers");

const getContactById = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findById(id);
  if (!result) {
    throw ReqtError(404);
  }
  res.json(result);
};

module.exports = getContactById;
