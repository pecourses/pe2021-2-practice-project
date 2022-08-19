const express = require('express');
const basicMiddlewares = require('./middlewares/basicMiddlewares');
const userController = require('./controllers/userController');
const contestController = require('./controllers/contestController');
const checkToken = require('./middlewares/checkToken');
const validators = require('./middlewares/validators');
const chatController = require('./controllers/chatController');
const upload = require('./utils/fileUpload');
const customersRouter = require('./routes/customerRouter');
const contestsRouter = require('./routes/contestRouter');
const offersRouter = require('./routes/offerRouter');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');

const router = express.Router();

router.use('/offers', offersRouter);

router.use('/auth', authRouter);

router.use(checkToken.checkToken);

router.use('/customers', customersRouter);

router.use('/contests', contestsRouter);

router.use('/users', userRouter);

router.post('/dataForContest', contestController.dataForContest);

router.post(
  '/pay',
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment
);

router.get('/downloadFile/:fileName', contestController.downloadFile);

router.post(
  '/setNewOffer',
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer
);

router.post(
  '/setOfferStatus',
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus
);

router.post(
  '/changeMark',
  basicMiddlewares.onlyForCustomer,
  userController.changeMark
);

router.post('/updateUser', upload.uploadAvatar, userController.updateUser);

router.post(
  '/cashout',
  basicMiddlewares.onlyForCreative,
  userController.cashout
);

router.post('/newMessage', chatController.addMessage);

router.post('/getChat', chatController.getChat);

router.post('/getPreview', chatController.getPreview);

router.post('/blackList', chatController.blackList);

router.post('/favorite', chatController.favoriteChat);

router.post('/createCatalog', chatController.createCatalog);

router.post('/updateNameCatalog', chatController.updateNameCatalog);

router.post('/addNewChatToCatalog', chatController.addNewChatToCatalog);

router.post('/removeChatFromCatalog', chatController.removeChatFromCatalog);

router.post('/deleteCatalog', chatController.deleteCatalog);

router.post('/getCatalogs', chatController.getCatalogs);

module.exports = router;
