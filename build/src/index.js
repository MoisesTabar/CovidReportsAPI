"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//database connection imports
const mongoose_1 = require("./database/mongoose");
const ioredis_1 = require("./database/ioredis");
//routes import 
const home_routes_1 = require("./routes/home.routes");
const user_routes_1 = require("./routes/user.routes");
const report_routes_1 = require("./routes/report.routes");
class Server {
    constructor(app) {
        this.app = app;
        this.PORT = process.env.PORT;
        this.MONGO_URI = process.env.MONGO_URI;
        this.REDIS_URI = process.env.REDIS_URI;
        this.config();
        this.routes();
    }
    /*
    * Config method to implement middlewares
    */
    config() {
        this.app.use(express_1.urlencoded({ extended: true }));
        this.app.use(express_1.json());
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        mongoose_1.mongoConnection(this.MONGO_URI);
        ioredis_1.redisConnection(this.REDIS_URI);
    }
    /*
    * Routes method to implement routes
    */
    routes() {
        this.app.use('/', home_routes_1.homeRouter);
        this.app.use('/auth', user_routes_1.usersRouter);
        this.app.use('/report', report_routes_1.reportRouter);
    }
    /*
    * Start method to initialize server
    */
    start() {
        try {
            this.app.listen(this.PORT, () => console.log(`Listening at http://localhost:${this.PORT}`));
        }
        catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}
exports.Server = Server;
