const iexClient = require("../config/iexjs");

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

module.exports = {
  getCompanyBySymbol,
  getQuoteBySymbol,
  getQuoteBySymbolUpdade
};
