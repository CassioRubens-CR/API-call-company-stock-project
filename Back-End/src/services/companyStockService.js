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
  }).then(
    (res) => {
      console.log("Secesso!", res);
      return res;
    },
    (err) => {
      console.error("Erro!", err);
      return err;
    }
  );
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
  }).then(
    (res) => {
      console.log("Sucesso!", res);
      return res;
    },
    (err) => {
      console.error("Erro!", err);
      return err;
    }
  );
};

module.exports = {
  getCompanyBySymbol,
  getQuoteBySymbol
};