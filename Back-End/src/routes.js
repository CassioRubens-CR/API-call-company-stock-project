const express = require('express');

const companyStockController = require("./controllers/companyStockController");

const routes = express.Router();

routes.get("/companystock/:symbol", companyStockController.getCompanyStockController);

module.exports = routes;
