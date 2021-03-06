import { Router } from 'express';

class ReportRouting{
    public router: Router;

    public constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(){
        this.router.post('/create', () => console.log('Create'));
        this.router.post('/update/:id', () => console.log('Update'));
        this.router.post('/delete:id', () => console.log('Delete'));
    }
} 

export const reportRouter = new ReportRouting().router;
