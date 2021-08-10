const { Client } = require("iexjs");
require('dotenv').config()

const iexClient = new Client({
  api_token: process.env.API_TOKEN_IEXJS,
  version: "stable",
});

module.exports = iexClient;
