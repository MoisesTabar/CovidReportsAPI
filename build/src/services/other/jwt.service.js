"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJwt = exports.generateJwt = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
* Generates a jwt secure token with a public and private key pair
* @param payload the information sent
* @param options the specification options
* @returns the token
*/
async function generateJwt(payload, options) {
    const privateKey = fs_1.default.readFileSync('./jwtRS256.key', 'utf-8');
    const token = await jsonwebtoken_1.default.sign(payload, privateKey, options);
    return token;
}
exports.generateJwt = generateJwt;
/**
* Decodes a jwt token and returns a value of a claim
* @param header the place where the token is stored
* @returns a value of a claim
*/
async function decodeJwt(header) {
    const token = header.split(' ')[1];
    const base64Payload = token.split('.')[1];
    const payload = Buffer.from(base64Payload, 'base64');
    const parsedPayload = JSON.parse(payload.toString());
    const { nationalId } = parsedPayload;
    return nationalId;
}
exports.decodeJwt = decodeJwt;
