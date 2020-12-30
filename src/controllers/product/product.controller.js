import { successResponse, errorResponse } from '../../helpers';


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
