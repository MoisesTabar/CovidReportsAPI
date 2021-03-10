import { Router } from 'express';
import { isLogged } from '../middlewares/isLogged';
import { HomeController } from '../controllers/home.controller';

const homeController = new HomeController();
export const homeRouter = Router();

//home page routes
homeRouter.get('/', homeController.allCases);
homeRouter.get('/location/:country', isLogged, homeController.casesByCountry);
homeRouter.get('/location', homeController.casesByLocation);

