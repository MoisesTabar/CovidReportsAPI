"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const home_service_1 = require("../services/home.service");
class HomeController {
    async allCases(req, res) {
        try {
            const allCases = await home_service_1.getAllCases();
            return res.status(200).json({ data: allCases });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ err: error });
        }
    }
    async casesByLocation(req, res) {
        try {
            const casesByLocation = await home_service_1.getCasesByLocation();
            return res.status(200).json({ data: casesByLocation });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ err: error });
        }
    }
    async casesByCountry(req, res) {
        try {
            const { country } = req.params;
            if (!country)
                return res.status(400).json({ error: 'Missing the country parameter' });
            const casesByCountry = await home_service_1.getCasesByCountry(country);
            return res.status(200).json({ data: casesByCountry });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }
}
exports.HomeController = HomeController;
