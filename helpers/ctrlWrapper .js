const ctrlWrapper = (ctrl) => {
  const fanc = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return fanc;
};

module.exports = ctrlWrapper;
