import axios from 'axios';
import { generateJwt } from '../services/other/jwt.service';
import { verifyHash } from '../services/other/hash.service';
import { userSchema } from '../models/user.model';

/**
* Searches an user and saves it on the database
* @param url the api url to search the id of the users
* @param password the password identitfier that will be hashed
* @returns a new user
*/
export async function userSignupRepo(url: string, password: string){
    const request = await axios.get(url, {
        headers: { },
        responseType: 'json'
    });
    const response = await request.data;
    const { Cedula, Nombres, Apellido1, FechaNacimiento, LugarNacimiento, IdSexo } = response;
    
    const newUser = await new userSchema({names: Nombres, lastName: Apellido1, birthData: FechaNacimiento, 
                                    birthPlace: LugarNacimiento, gender: IdSexo, nationalId: Cedula, password: password}).save();

    return newUser;
}

/**
* Logs in an user and recieves a token
* @param nationalId the identifier to search for a user
* @param password the plain text password to verify
* @returns a jwt token
*/
export async function userLoginRepo(nationalId: string, password: string){
    const findUser = await userSchema.findOne({nationalId: nationalId});
    const matchPassword = await verifyHash(password, findUser?.password!);
    
    if(matchPassword){
        const jwt = await generateJwt({nationalId}, {
            expiresIn: '12h',
            algorithm: 'RS256'
        });
        return jwt;
    }
}