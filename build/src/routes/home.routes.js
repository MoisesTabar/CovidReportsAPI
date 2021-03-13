"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const isLogged_1 = require("../middlewares/isLogged");
const home_controller_1 = require("../controllers/home.controller");
const homeController = new home_controller_1.HomeController();
exports.homeRouter = express_1.Router();
//home page routes
exports.homeRouter.get('/', homeController.allCases);
exports.homeRouter.get('/location/:country', isLogged_1.isLogged, homeController.casesByCountry);
exports.homeRouter.get('/location', homeController.casesByLocation);
