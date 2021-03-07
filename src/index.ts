import { Application, urlencoded, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

//database connection imports
import { mongoConnection } from './database/mongoose';
import { redisConnection } from './database/ioredis';

//routes import 
import { homeRouter } from './routes/home.routes';

export class Server{
    public readonly app: Application;

    private readonly PORT: string;
    private readonly MONGO_URI: string;
    private readonly REDIS_URI: string;

    public constructor(app: Application){
        this.app = app;

        this.PORT = process.env.PORT!;
        this.MONGO_URI = process.env.MONGO_URI!;
        this.REDIS_URI = process.env.REDIS_URI!;

        this.config();
        this.routes();
    }

    /*
    * Config method to implement middlewares
    */
    private config(){
        this.app.use(urlencoded({extended: true}));
        this.app.use(json());
        this.app.use(cors());
        this.app.use(morgan('dev'));

        mongoConnection(this.MONGO_URI);
        redisConnection(this.REDIS_URI);
    }

    /*
    * Routes method to implement routes
    */
    private routes(){
        this.app.use('/', homeRouter);
    }

    /*
    * Start method to initialize server
    */
    public start(){
        try {
            this.app.listen(this.PORT, () => console.log(`Listening at http://localhost:${this.PORT}`));
        } 
        catch(error) {
            console.log(`Error: ${error}`);
        }
    }
}