import fs from 'fs';
import jwt from 'jsonwebtoken';

/**
* Generates a jwt secure token with a public and private key pair
* @param payload the information sent
* @param options the specification options
* @returns the token
*/
export async function generateJwt(payload:any, options:any){
    const privateKey = fs.readFileSync('./jwtRS256.key', 'utf-8');

    const token = await jwt.sign(payload, privateKey, options);
    return token;
}