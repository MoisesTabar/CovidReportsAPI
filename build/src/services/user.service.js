"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const user_repository_1 = require("../repositories/user.repository");
const hash_service_1 = require("./other/hash.service");
/**
* Executes the userSignup function and validates if a user is existant or not
* @param nationalId the id to look for in the api
* @param password the password to be hashed and saved
* @returns the found and signed up user
*/
async function signup(nationalId, password) {
    const hashed = await hash_service_1.hashPassword(password);
    return await user_repository_1.userSignupRepo(`https://api.adamix.net/apec/cedula/${nationalId}`, hashed);
}
exports.signup = signup;
/**
* Executes the userLogin function and validates if a user is existant or not
* @param nationalId the id to look for in the database
* @param password the password hash to be verified
* @returns the token
*/
async function login(nationalId, password) {
    return await user_repository_1.userLoginRepo(nationalId, password);
}
exports.login = login;
