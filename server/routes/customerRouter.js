const { Router } = require('express');
const contestController = require('../controllers/contestController');

const customersRouter = Router();

customersRouter.get('/id/contests', contestController.getCustomersContests);

module.exports = customersRouter;
