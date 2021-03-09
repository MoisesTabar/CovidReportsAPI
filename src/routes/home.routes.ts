import { Router } from 'express';
import { HomeController } from '../controllers/home.controller';

const homeController = new HomeController();
export const homeRouter = Router();

//home page routes
homeRouter.get('/', homeController.allCases);
homeRouter.get('/location/:country', homeController.casesByCountry);
homeRouter.get('/location', homeController.casesByLocation);

