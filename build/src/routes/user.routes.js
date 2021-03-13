"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userController = new user_controller_1.UserController();
exports.usersRouter = express_1.Router();
exports.usersRouter.post('/login', userController.userLogin);
exports.usersRouter.post('/signup', userController.userSignup);
