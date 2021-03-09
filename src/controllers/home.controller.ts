import { Request, Response } from 'express';
import { getAllCases, getCasesByLocation, getCasesByCountry } from '../services/home.service';

export class HomeController{
    public async allCases(req: Request, res: Response):Promise<Response>{
        try {
            const allCases = await getAllCases();
            return res.status(200).json({data: allCases});    
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({err: error});   
        }
    }

    public async casesByLocation(req: Request, res: Response):Promise<Response>{
        try {
            const casesByLocation = await getCasesByLocation();
            return res.status(200).json({data: casesByLocation});
    
        }
        catch(error) {
            console.log(error);
            return res.status(400).json({err: error});   
        }
    }

    public async casesByCountry(req: Request, res: Response):Promise<Response>{
        try {
            const { country } = req.params;
            const casesByCountry = await getCasesByCountry(country);
            return res.status(200).json({data: casesByCountry});
    
        } 
        catch (error) {
            console.log(error);
            return res.status(400).json({err: error});   
        }
    }
}  