"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHash = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
* Hashes a given plain text password
* @param password the password to be hashed
* @returns the hash
*/
async function hashPassword(password) {
    const salt = await bcrypt_1.default.genSalt(14);
    const hash = await bcrypt_1.default.hash(password, salt);
    return hash;
}
exports.hashPassword = hashPassword;
/**
* Verifies a hashed password with a plain text written one
* @param password the plain text password
* @param hash the hash
* @returns the verified password
*/
async function verifyHash(password, hash) {
    const verify = await bcrypt_1.default.compare(password, hash);
    return verify;
}
exports.verifyHash = verifyHash;
