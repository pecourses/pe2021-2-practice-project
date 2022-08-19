const { Router } = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');

const contestsRouter = Router();

contestsRouter.get(
  '/',
  basicMiddlewares.onlyForCreative,
  basicMiddlewares.parseQuery,
  contestController.getContests
);

contestsRouter.get(
  '/:contestId',
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

module.exports = contestsRouter;
