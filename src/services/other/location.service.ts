import axios from 'axios';

/** 
* Gets your current location by ways of your local ip address
* @returns your country code AKA current location
*/
export async function getCurrentLocation(){
    const request = await axios.get(`http://ip-api.com/json/`, {
        responseType: 'json'
    });
    const response = await request.data;
    const { countryCode } = response;

    return countryCode;
}