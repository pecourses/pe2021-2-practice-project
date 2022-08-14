const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/transactions', userController.getTransactions);

module.exports = userRouter;
