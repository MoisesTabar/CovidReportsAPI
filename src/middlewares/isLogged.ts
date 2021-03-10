import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';

export async function isLogged(req: Request, res: Response, next: NextFunction){
    try {
        const headers = req.headers['authorization'] as string;
        const token = headers.split(' ')[1];
        const publicKey = fs.readFileSync('./jwtRS256.key.pub', 'utf-8');
    
        const verify = await jwt.verify(token, publicKey, {
            'algorithms': ['RS256']
        });
    
        if(verify){
            next();
        }
        else{
            res.status(401).json({error: 'You are not logged in'})
        }    
    } 
    catch (error) {
        console.log(error);
        return res.status(400).json({error: error});
    }
}
