import { homeRepository } from "../repositories/home.repository";
import { getCurrentLocation } from './other/location.service';

/** 
* Consumes covidAPI and returns all summary data destructured in an object
* @returns A response of type Promise<string | object>
*/
export async function getAllCases(): Promise<any>{
    const homeGetAllCases = await homeRepository('https://corona.lmao.ninja/v2/all', 'AllData');
    return homeGetAllCases;
}

/**
* Gets the information of the cases near your current location
* @returns a response of type Promise<string | object>
*/
export async function getCasesByLocation(): Promise<any>{
    const countryCode = await getCurrentLocation(); 
    const homeGetCasesByLocation = await homeRepository(`https://corona.lmao.ninja/v2/countries/${countryCode}`, 'LocationData');
    return homeGetCasesByLocation;
}

/**
* Gets the information of cases of a country you choose
* @param country the country or country code you want to search
* @returns a response of type Promise<any>
*/
export async function getCasesByCountry(country: string): Promise<any>{
    const homeGetCasesByCountry = await homeRepository(`https://corona.lmao.ninja/v2/countries/${country}`, `CountryData${country}`);
    return homeGetCasesByCountry;
}