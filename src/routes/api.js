import express from 'express';

import * as productController from '../controllers/product/product.controller';
import paginator from '../middleware/paginator';
import { product } from '../models';


const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get(
  '/',
  paginator(product),
  productController.listProducts,
);

router.get(
  '/:id',
  productController.featureProduct,
);


module.exports = router;
