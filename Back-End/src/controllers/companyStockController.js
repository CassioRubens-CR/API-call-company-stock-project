const companyStockService = require("../services/companyStockService");

const getCompanyStockController = async (req, res) => {
  try {
    const { symbol } = req.params;
    const result = await companyStockService.getCompanyStock(symbol);
    return res.status(result.status).send(result.data);
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};

module.exports = { getCompanyStockController };
