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

/**
* Decodes a jwt token and returns a value of a claim
* @param header the place where the token is stored 
* @returns a value of a claim
*/
export async function decodeJwt(header: string){
    const token: string = header.split(' ')[1];
    
    const base64Payload = token.split('.')[1];
    const payload = Buffer.from(base64Payload, 'base64');
    
    const parsedPayload = JSON.parse(payload.toString());
    
    const { nationalId } = parsedPayload;

    return nationalId;
}