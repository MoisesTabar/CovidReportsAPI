import { Request, Response } from 'express'
import { decodeJwt } from '../services/other/jwt.service';
import { create } from '../services/report.service';
import { userSchema } from '../models/user.model';
import { userDto } from '../models/user.model';

export class ReportController{
    public async createReport(req: Request, res: Response): Promise<Response>{
        try {
            const { type, description, date, place } = req.body;
            if(!type || !place) return res.status(400).json({error: 'Provide missing fields'});

            const nationalId = await decodeJwt(req.headers['authorization'] as string);
            const findUser = await userSchema.findOne({nationalId: nationalId}) as userDto;

            const createReport = await create(findUser._id, type, place, date , description);

            return res.status(201).json({data: createReport, message: 'Report created'});
        } 
        catch(error) {
            console.log(error);
            return res.status(400).json({error: error});
        }
    }
}