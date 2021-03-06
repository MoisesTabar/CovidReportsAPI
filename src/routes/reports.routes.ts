import { BaseRouter } from './base.routes';

class ReportRouting extends BaseRouter{
    constructor(){
        super();
    }

    protected routes(){
        this.router.post('/create', () => console.log('Create'));
        this.router.post('/update/:id', () => console.log('Update'));
        this.router.post('/delete:id', () => console.log('Delete'));
    }
} 

export const reportRouter = new ReportRouting().router;
