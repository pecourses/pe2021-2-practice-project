const { Router } = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');
const upload = require('../utils/fileUpload');

const contestsRouter = Router();

contestsRouter.get(
  '/',
  basicMiddlewares.onlyForCreative,
  basicMiddlewares.parseQuery,
  contestController.getContests
);

contestsRouter
  .route('/:contestId')
  .get(basicMiddlewares.canGetContest, contestController.getContestById)
  .patch(upload.updateContestFile, contestController.updateContest);

module.exports = contestsRouter;
