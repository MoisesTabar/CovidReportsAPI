"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginRepo = exports.userSignupRepo = void 0;
const axios_1 = __importDefault(require("axios"));
const jwt_service_1 = require("../services/other/jwt.service");
const hash_service_1 = require("../services/other/hash.service");
const user_model_1 = require("../models/user.model");
/**
* Searches an user and saves it on the database
* @param url the api url to search the id of the users
* @param password the password identitfier that will be hashed
* @returns a new user
*/
async function userSignupRepo(url, password) {
    const request = await axios_1.default.get(url, {
        headers: {},
        responseType: 'json'
    });
    const response = await request.data;
    const { Cedula, Nombres, Apellido1, FechaNacimiento, LugarNacimiento, IdSexo } = response;
    const newUser = await new user_model_1.userSchema({ names: Nombres, lastName: Apellido1, birthData: FechaNacimiento,
        birthPlace: LugarNacimiento, gender: IdSexo, nationalId: Cedula, password: password }).save();
    return newUser;
}
exports.userSignupRepo = userSignupRepo;
/**
* Logs in an user and recieves a token
* @param nationalId the identifier to search for a user
* @param password the plain text password to verify
* @returns a jwt token
*/
async function userLoginRepo(nationalId, password) {
    const findUser = await user_model_1.userSchema.findOne({ nationalId: nationalId });
    const matchPassword = await hash_service_1.verifyHash(password, findUser?.password);
    if (matchPassword) {
        const jwt = await jwt_service_1.generateJwt({ nationalId }, {
            expiresIn: '12h',
            algorithm: 'RS256'
        });
        return jwt;
    }
}
exports.userLoginRepo = userLoginRepo;
