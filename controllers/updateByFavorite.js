const { Contact } = require("../models/contact");
const { ReqtError } = require("../helpers");

const updateByFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw ReqtError(404);
  }
  res.json(result);
};

module.exports = updateByFavorite;
