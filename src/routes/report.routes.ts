import { Router } from "express";
import { ReportController } from '../controllers/report.controller';
import { isLogged } from '../middlewares/isLogged';

const reportController = new ReportController();
export const reportRouter = Router();

reportRouter.post('/create', isLogged, reportController.createReport);
reportRouter.put('/update/:id', isLogged);
reportRouter.delete('/delete/:id', isLogged);