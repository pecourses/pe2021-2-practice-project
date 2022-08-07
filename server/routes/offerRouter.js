const { Router } = require('express');
const offerController = require('./../controllers/offerController');
const offersRouter = Router();

offersRouter.get('/', offerController.getOffers);

module.exports = offersRouter;
