const quoteService = require("../services/quoteService");

const getQuoteBySymbol = async (req, res) => {
  const { symbol } = req.params;

  const quote = await quoteService.getQuoteBySymbol(symbol);

  return res.status(200).json(quote);
};

module.exports = { getQuoteBySymbol };