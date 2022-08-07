const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const contestController = require('../controllers/contestController');

const customersRouter = Router();

customersRouter.get(
  '/id/contests',
  checkToken.checkToken,
  contestController.getCustomersContests,
);

module.exports = customersRouter;
