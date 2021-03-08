import Redis from "ioredis";

//open the instance of redis
const redis = new Redis();

/** 
* Caches the data in the redis database 
* @params key: the label of the data we will cache
* @params value: the data cached
* @returns saveData: the cached data
*/
export async function cacheData(key: any, value: any){
    try {        
        const saveData = await redis.set(key, JSON.stringify(value), 'EX', 10 * 10 * 24);
        return saveData;
    } 
    catch (error) {
        console.log(`Error ${error}`);
    }
}

/** 
* Gets the cached data in the redis database
* @params key: the label of the data that is cached
* @returns getData: the cached data
*/
export async function getCachedData(key: any){
    try {
        const getData = await redis.get(key);
        if(getData){
            return getData;
        }
    } 
    catch (error) {
        console.log(`Error ${error}`);
    }
}