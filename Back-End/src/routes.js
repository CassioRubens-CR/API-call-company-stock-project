const express = require('express');

const quoteController = require("./controllers/quoteController");
const companyController = require("./controllers/companyController");

const routes = express.Router();

routes.get("/quote/:symbol", quoteController.getQuoteBySymbol);
routes.get("/company/:symbol", companyController.getCompanyDataBySymbol);

module.exports = routes;