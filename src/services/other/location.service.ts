import axios from 'axios';
import { getCachedData, cacheData } from "./cache.service";

/** 
* Gets your current location by ways of your local ip address
* @returns your country code AKA current location
*/
export async function getCurrentLocation(){
    const getData = await getCachedData('CountryCode');
    if(getData){
        return getData;
    }
    const request = await axios.get(`http://ip-api.com/json/`, {
        responseType: 'json'
    });
    const response = await request.data;
    const { countryCode } = response;

    const saveData = await cacheData('CountryCode', countryCode);
    console.log(`Country Code ${saveData}`);

    return countryCode;
}