import { Router } from 'express';

class AuthRouting{
    public router: Router;

    public constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(){
        this.router.post('/login', () => console.log('Login'));
        this.router.post('/signin', () => console.log('Signin'));
        this.router.post('/signout', () => console.log('Signout'));
    }
} 

export const authRouter = new AuthRouting().router;
