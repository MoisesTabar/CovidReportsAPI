"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../models/user.model");
const user_service_1 = require("../services/user.service");
class UserController {
    async userSignup(req, res) {
        try {
            const { nationalId, password } = req.body;
            if (!nationalId || !password)
                return res.status(400).json({ error: 'Provide id and password' });
            const findUser = await user_model_1.userSchema.findOne({ nationalId: nationalId });
            if (findUser) {
                return res.status(400).json({ error: 'User already exists' });
            }
            const newUser = user_service_1.signup(nationalId, password);
            return res.status(201).json({ user: newUser, message: 'Registered!' });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }
    async userLogin(req, res) {
        try {
            const { nationalId, password } = req.body;
            if (!nationalId || !password)
                return res.status(400).json({ error: 'Provide id and password' });
            const findUser = await user_model_1.userSchema.findOne({ nationalId: nationalId });
            if (!findUser) {
                return res.status(404).json({ error: 'User does not exist' });
            }
            const verify = await user_service_1.login(nationalId, password);
            return res.status(200).json({ message: verify });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }
}
exports.UserController = UserController;
