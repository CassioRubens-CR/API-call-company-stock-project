const iexClient = require("../config/iexjs");
const Company = require("../models/Company");

const getCompanyBySymbol = async (symbol) => {
  return iexClient.company(symbol, {
    filter: [
      'website',
      'employees',
      'address',
      'address2',
      'state',
      'city',
      'zip',
      'country',
      'phone',
      'description',
    ]
  })
};

const getQuoteBySymbol = async (symbol) => {
  return iexClient.quote(symbol, {
    filter: [
      'symbol',
      'companyName',
      'latestPrice',
      'latestUpdate',
      'currency'
    ]
  });
};

const getQuoteBySymbolUpdade = async (symbol) => {
  return iexClient.quote(symbol, {
    filter: [
      'latestPrice',
      'latestUpdate',
    ]
  });
};

const getCompanyStock = async (symbol) => {
  try {
    const companyBD = await Company.findOne({ where: { symbol } });

    if (companyBD) {
      const quote = await getQuoteBySymbolUpdade(symbol);

      const { latestPrice, latestUpdate } = quote;

      companyBD.latestPrice = latestPrice;
      companyBD.latestUpdate = latestUpdate;
      await companyBD.save();

      return {
        status: 200,
        data: companyBD
      };
    }
    const company = await getCompanyBySymbol(symbol);

    const quote = await getQuoteBySymbol(symbol);

    const result = { ...quote, ...company };

    const createCompanyDB = await Company.create(result);

    return {
      status: 201,
      data: createCompanyDB
    };

  } catch (error) {
    throw new Error(`Não foi possível realizar a cotação para o símbolo ${symbol}. Por favor tente mais tarde!`);
  }
};

module.exports = {
  getCompanyBySymbol,
  getQuoteBySymbol,
  getQuoteBySymbolUpdade,
  getCompanyStock,
};
