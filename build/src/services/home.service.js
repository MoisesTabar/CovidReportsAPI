"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCasesByCountry = exports.getCasesByLocation = exports.getAllCases = void 0;
const home_repository_1 = require("../repositories/home.repository");
const location_service_1 = require("./other/location.service");
/**
* Consumes covidAPI and returns all summary data destructured in an object
* @returns A response of type Promise<string | object>
*/
async function getAllCases() {
    const homeGetAllCases = await home_repository_1.homeRepository('https://corona.lmao.ninja/v2/all', 'AllData');
    return homeGetAllCases;
}
exports.getAllCases = getAllCases;
/**
* Gets the information of the cases near your current location
* @returns a response of type Promise<string | object>
*/
async function getCasesByLocation() {
    const countryCode = await location_service_1.getCurrentLocation();
    const homeGetCasesByLocation = await home_repository_1.homeRepository(`https://corona.lmao.ninja/v2/countries/${countryCode}`, 'LocationData');
    return homeGetCasesByLocation;
}
exports.getCasesByLocation = getCasesByLocation;
/**
* Gets the information of cases of a country you choose
* @param country the country or country code you want to search
* @returns a response of type Promise<any>
*/
async function getCasesByCountry(country) {
    const homeGetCasesByCountry = await home_repository_1.homeRepository(`https://corona.lmao.ninja/v2/countries/${country}`, `CountryData${country}`);
    return homeGetCasesByCountry;
}
exports.getCasesByCountry = getCasesByCountry;
