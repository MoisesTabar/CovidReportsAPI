import { Router } from 'express';

class HomeRouting{
    public router: Router;

    public constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(){
        this.router.get('/', () => console.log('All cases'));
        this.router.get('/:country', () => console.log('By country'));
        this.router.get('/location', () => console.log('Location'));
    }
} 

export const homeRouter = new HomeRouting().router;
