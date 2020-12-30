import { successResponse, errorResponse } from '../../helpers';
import { product, sequelize } from '../../models';


export const listProducts = (req, res) => {
  try {
    const products = res.locals.paginatedResult.results;
    // sort products asc
    products.sort((a, b) => a.price - b.price);

    // todo: better enhancement ...
    // const products = await product.findAndCountAll({
    //   order: [['createdAt', 'DESC'], ['price', 'ASC']],
    //   offset: (page - 1) * limit,
    //   limit,
    // });
    return successResponse(req, res, { products });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};


export const featureProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    // toggle field if false then true, if true then false
    await sequelize.query(`UPDATE products SET featured = NOT featured WHERE id = ${productId};`);
    const productEntity = await product.findByPk(productId);
    return successResponse(req, res, { productEntity });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
