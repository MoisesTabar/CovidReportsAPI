import axios from 'axios';
import { getCachedData, cacheData } from '../services/other/cache.service';

/** 
* Works as manager for the api calls of the home route
* @param url the api url to consume
* @param label the label or key of the data that will be inserted to cache
* @returns the cache data or the data of the response
*/
export async function homeRepository(url: string, label: any){
    const verifyCache = await getCachedData(label);
    if(verifyCache){
        return verifyCache;
    }

    const request = await axios.get(url, {
        headers: { },
        responseType: 'json'
    });
    const response = await request.data;
    const { country, cases, todayCases, deaths, todayDeaths, recovered, tests } = response;
    
    const data: object = {
        country: country,
        cases: cases, 
        todayCases: todayCases,
        deaths: deaths, 
        todayDeaths: todayDeaths, 
        recovered: recovered, 
        tests: tests
    };

    //make the request and save that data in cache
    const saveToCache = await cacheData(label, data);
    console.log(`Cache data saved: ${saveToCache}`);

    return data;
}