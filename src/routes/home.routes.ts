import { Router } from 'express';

export const homeRouter = Router();

//home page routes
homeRouter.get('/', () => console.log('All cases'));
homeRouter.get('/:country', () => console.log('By country'));
homeRouter.get('/location', () => console.log('By location'));

