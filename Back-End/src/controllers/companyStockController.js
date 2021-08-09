const companyStockService = require("../services/companyStockService");
const Company = require("../models/Company");

const getCompanyStockController = async (req, res) => {
  const { symbol } = req.params;

  try {
    const companyBD = await Company.findOne({ where: { symbol } });

    if (companyBD) {
      const quote = await companyStockService.getQuoteBySymbolUpdade(symbol);

      const { latestPrice, latestUpdate } = quote;

      companyBD.latestPrice = latestPrice;
      companyBD.latestUpdate = latestUpdate;
      await companyBD.save();

      return res.status(200).json(companyBD)
    }
    const company = await companyStockService.getCompanyBySymbol(symbol);

    const quote = await companyStockService.getQuoteBySymbol(symbol);

    const result = { ...quote, ...company };

    const createCompanyDB = await Company.create(result);

    return res.status(201).json(createCompanyDB);

  } catch (error) {
    return res.status(400).json({ message: `Não foi possível realizar a cotação para o símbolo ${symbol}. Por favor tente mais tarde!` });
  }
};

module.exports = { getCompanyStockController };
