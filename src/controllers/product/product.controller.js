import { product } from '../../models';
import { successResponse, errorResponse } from '../../helpers';


export const listProducts = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 25;
    const products = await product.findAndCountAll({
      order: [['createdAt', 'DESC'], ['price', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { products });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
