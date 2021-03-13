"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRepository = void 0;
const axios_1 = __importDefault(require("axios"));
const cache_service_1 = require("../services/other/cache.service");
/**
* Works as manager for the api calls of the home route
* @param url the api url to consume
* @param label the label or key of the data that will be inserted to cache
* @returns the cache data or the data of the response
*/
async function homeRepository(url, label) {
    const verifyCache = await cache_service_1.getCachedData(label);
    if (verifyCache) {
        return JSON.parse(verifyCache);
    }
    const request = await axios_1.default.get(url, {
        headers: {},
        responseType: 'json'
    });
    const response = await request.data;
    const { country, cases, todayCases, deaths, todayDeaths, recovered, tests } = response;
    const data = {
        country: country,
        cases: cases,
        todayCases: todayCases,
        deaths: deaths,
        todayDeaths: todayDeaths,
        recovered: recovered,
        tests: tests
    };
    //make the request and save that data in cache
    const saveToCache = await cache_service_1.cacheData(label, data);
    console.log(`Cache data saved: ${saveToCache}`);
    return data;
}
exports.homeRepository = homeRepository;
