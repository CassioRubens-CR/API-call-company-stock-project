const iexClient = require("../config/iexjs");

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
      console.log("200", res);
      return res;
    },
    (err) => {
      console.error("400", err);
      return err;
    }
  );
};

module.exports = { getQuoteBySymbol };