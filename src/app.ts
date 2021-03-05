import express from 'express';
import dotenv from 'dotenv';

import { Server } from './index';

//calling dotenv to read .env files
dotenv.config();

//receiving the server by making an object of the server class
const app = express();
const server = new Server(app);

//initialization
server.start();
