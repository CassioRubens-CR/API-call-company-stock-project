const { Client } = require("iexjs");

const iexClient = new Client({
  api_token: "pk_8948b7df14ea48059b9ed3b9c0495d29",
  version: "stable",
});

module.exports = iexClient;
