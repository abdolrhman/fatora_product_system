import { errorResponse } from '../helpers';

function paginator(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = {};

    if (endIndex < model.length) {
      result.next = {
        page: page + 1,
        limit,
      };
    }
    if (startIndex > 0) {
      result.previous = {
        page: page - 1,
        limit,
      };
    }
    const allData = await model.findAll();
    result.results = allData.slice(startIndex, endIndex);

    res.locals.paginatedResult = result;
    next();
  };
}

export default paginator;
