import { Router } from 'express';
import { isLogged } from '../middlewares/isLogged';
import { UserController } from '../controllers/user.controller';

const userController = new UserController() 
export const usersRouter = Router();

usersRouter.post('/login', userController.userLogin);
usersRouter.post('/signup', userController.userSignup);
