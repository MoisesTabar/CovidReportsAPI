import { Request, Response } from 'express';
import { getAllCases, getCasesByLocation } from '../services/home.service';

export class HomeController{
    public async allCases(req: Request, res: Response):Promise<Response>{
        const allCases = await getAllCases();
        return res.status(200).json({data: allCases});
    }

    public async casesByLocation(req: Request, res: Response):Promise<Response>{
        const casesByLocation = await getCasesByLocation();
        return res.status(200).json({data: casesByLocation});
    }
}