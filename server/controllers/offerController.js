const db = require('../models');

module.exports.getOffers = async (req, res, next) => {
  const { limit = 10, offset = 0 } = req.query;

  try {
    const foundOffers = await db.Offers.findAll(
      { limit, offset },
      { raw: true }
    );

    res.status(200).send(foundOffers);
  } catch (err) {
    next(err);
  }
};
