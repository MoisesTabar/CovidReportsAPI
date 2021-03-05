import { Application, urlencoded, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export class Server{
    public readonly app: Application;
    public readonly PORT: string;
    public readonly MONGO_URI: string;
    public readonly REDIS_URI: string;

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
    }

    /*
    * Routes method to implement routes
    */
    private routes(){
        this.app.get('/', () => console.log('Hi'));
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