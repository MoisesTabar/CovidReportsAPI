import { BaseRouter } from './base.routes';

class AuthRouting extends BaseRouter{
    constructor(){
        super();
    }

    protected routes(){
        this.router.post('/login', () => console.log('Login'));
        this.router.post('/signin', () => console.log('Signin'));
        this.router.post('/signout', () => console.log('Signout'));
    }
} 

export const authRouter = new AuthRouting().router;
