import axios from 'axios';
import { cacheData, getCachedData } from './other/cache.service';

/** 
* Consumes covidAPI and returns all summary data destructured in an object
* @returns A response of type Promise<any>
*/
export async function getAllCases(): Promise<any>{
    //verify that the data is in cache by looking at the key: AllData
    const verifyCache = await getCachedData('AllData')
    if(verifyCache){
        return verifyCache;
    }

    const request = await axios.get('https://corona.lmao.ninja/v2/all', {
        headers: { },
        responseType: 'json'
    });
    const response = await request.data;
    const { cases, todayCases, deaths, todayDeaths, recovered, tests } = response;
    const data: object = {
        cases: cases, 
        todayCases: todayCases,
        deaths: deaths, 
        todayDeaths: todayDeaths, 
        recovered: recovered, 
        tests: tests
    };

    //make the request and save that data in cache
    const saveToCache = await cacheData('AllData', data);
    console.log(`Cache data ${saveToCache}`);

    return data;
}