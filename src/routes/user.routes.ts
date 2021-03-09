import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const userController = new UserController() 
export const usersRouter = Router();

usersRouter.post('/login', userController.userLogin);
usersRouter.post('/signup', userController.userSignup);
usersRouter.post('/signout', () => console.log('Logout'));