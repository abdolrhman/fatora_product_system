import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/product.controller';
import * as userValidator from '../controllers/user/product.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', userController.profile);
router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);

module.exports = router;
