const iexClient = require("../config/iexjs");

const getCompanyDataBySymbol = async (symbol) => {
  return iexClient.company(symbol).then(
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

module.exports = { getCompanyDataBySymbol };