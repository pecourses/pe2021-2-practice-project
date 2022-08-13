const { Router } = require('express');
const validators = require('../middlewares/validators');
const userController = require('../controllers/userController');
const hashPass = require('../middlewares/hashPassMiddle');
const checkToken = require('../middlewares/checkToken');
const authRouter = Router();

authRouter.post(
  '/registration',
  validators.validateRegistrationData,
  hashPass,
  userController.registration
);

authRouter.post('/login', validators.validateLogin, userController.login);

authRouter.post('/getUser', checkToken.checkAuth);

module.exports = authRouter;
