"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentLocation = void 0;
const axios_1 = __importDefault(require("axios"));
const cache_service_1 = require("./cache.service");
/**
* Gets your current location by ways of your local ip address
* @returns your country code AKA current location
*/
async function getCurrentLocation() {
    const getData = await cache_service_1.getCachedData('CountryCode');
    if (getData) {
        return getData;
    }
    const request = await axios_1.default.get(`http://ip-api.com/json/`, {
        responseType: 'json'
    });
    const response = await request.data;
    const { countryCode } = response;
    const saveData = await cache_service_1.cacheData('CountryCode', countryCode);
    console.log(`Country Code ${saveData}`);
    return countryCode;
}
exports.getCurrentLocation = getCurrentLocation;
