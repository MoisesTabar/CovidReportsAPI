import { homeRepository } from "../repositories/home.repository";

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
    const homeGetCasesByLocation = await homeRepository('https://corona.lmao.ninja/v2/countries/DR', 'CountryData');
    return homeGetCasesByLocation;
}