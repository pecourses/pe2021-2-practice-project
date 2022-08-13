const { Router } = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');

const contestsRouter = Router();

contestsRouter.get(
  '/:contestId',
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

module.exports = contestsRouter;
