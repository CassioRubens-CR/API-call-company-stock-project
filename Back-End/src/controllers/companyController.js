const companyService = require("../services/companyService");

const getCompanyDataBySymbol = async (req, res) => {
  const { symbol } = req.params;

  const company = await companyService.getCompanyDataBySymbol(symbol);

  return res.status(200).json(company);
};

module.exports = { getCompanyDataBySymbol };
