import { userSignupRepo, userLoginRepo } from '../repositories/user.repository';
import { hashPassword } from './other/hash.service';

/**
* Executes the userSignup function and validates if a user is existant or not
* @param nationalId the id to look for in the api
* @param password the password to be hashed and saved
* @returns the found and signed up user
*/
export async function signup(nationalId: string, password: string){
    const hashed = await hashPassword(password)
    return await userSignupRepo(`https://api.adamix.net/apec/cedula/${nationalId}`, hashed);
}

/**
* Executes the userLogin function and validates if a user is existant or not
* @param nationalId the id to look for in the database
* @param password the password hash to be verified
* @returns the token
*/
export async function login(nationalId: string, password: string){
    return await userLoginRepo(nationalId, password);
}