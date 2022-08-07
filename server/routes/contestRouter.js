const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');

const contestsRouter = Router();

contestsRouter.get(
  '/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);

module.exports = contestsRouter;

// 1 создали роутер под сущность
// 2 вынесли в него конкретный эндпойнт
// 3 изменить метод и путь
// 4 внесли изменения в апи на клиенте
// 5 если данные на фронте перепаковались, то внести изменения в миддлвары и контроллер
