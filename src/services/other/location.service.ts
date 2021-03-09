import { networkInterfaces } from 'os';
import axios from 'axios';

/** 
* Gets your current local ip address
* @returns your local ip address
*/
function getCurrentIp(){
    const nets = networkInterfaces();
    const results = Object.create(null); // Or just '{}', an empty object
    
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]!) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                return results["en0"];
            }
        }
    }
}

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