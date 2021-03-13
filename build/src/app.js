"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./index");
//calling dotenv to read .env files
dotenv_1.default.config();
//receiving the server by making an object of the server class
const app = express_1.default();
const server = new index_1.Server(app);
//initialization
server.start();
