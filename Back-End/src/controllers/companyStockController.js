const companyStockService = require("../services/companyStockService");

const getCompanyStockController = async (req, res) => {
  const { symbol } = req.params;

  const company = await companyStockService.getCompanyBySymbol(symbol);
  
  const quote = await companyStockService.getQuoteBySymbol(symbol);

  const result = {...quote, ...company};

  return res.status(200).json(result);
};

module.exports = { getCompanyStockController };
