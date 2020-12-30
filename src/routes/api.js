import express from 'express';

import * as productController from '../controllers/product/product.controller';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get(
  '/',
  productController.listProducts,
);

module.exports = router;
