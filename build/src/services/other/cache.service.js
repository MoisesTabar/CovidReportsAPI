"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedData = exports.cacheData = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
//open the instance of redis
const redis = new ioredis_1.default();
/**
* Caches the data in the redis database
* @param key: the label of the data we will cache
* @param value: the data cached
* @returns saveData: the cached data
*/
async function cacheData(key, value) {
    try {
        const saveData = await redis.setex(key, 1400, JSON.stringify(value));
        return saveData;
    }
    catch (error) {
        console.log(`Error ${error}`);
    }
}
exports.cacheData = cacheData;
/**
* Gets the cached data in the redis database
* @param key: the label of the data that is cached
* @returns getData: the cached data
*/
async function getCachedData(key) {
    try {
        const getData = await redis.get(key);
        if (getData) {
            return getData;
        }
    }
    catch (error) {
        console.log(`Error ${error}`);
    }
}
exports.getCachedData = getCachedData;
