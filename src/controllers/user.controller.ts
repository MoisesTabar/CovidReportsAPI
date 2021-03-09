import { Request, Response } from 'express';
import { userSchema } from '../models/user.model';
import { signup, login } from '../services/user.service';

export class UserController{
    public async userSignup(req: Request, res: Response): Promise<Response>{
        try {
            const { nationalId, password } = req.body;
            if(!nationalId || !password) return res.status(400).json({error: 'Provide id and password'});

            const findUser = await userSchema.findOne({nationalId: nationalId});
            if(findUser){
                return res.status(400).json({error: 'User already exists'});
            }

            const newUser = signup(nationalId, password);
            return res.status(201).json({user: newUser, message: 'Registered!'})
        } 
        catch (error) {
            console.log(error);
            return res.status(400).json({error: error});
        }
    }

    public async userLogin(req: Request, res: Response): Promise<Response>{
        try {
            const { nationalId, password  } = req.body;
            if(!nationalId || !password) return res.status(400).json({error: 'Provide id and password'});

            const findUser = await userSchema.findOne({nationalId: nationalId});
            if(!findUser){
                return res.status(404).json({error: 'User does not exist'});
            }

            const verify = await login(nationalId, password);
            return res.status(200).json({message: verify});
        } 
        catch(error){
            console.log(error);
            return res.status(400).json({error: error});
        }
    }
}