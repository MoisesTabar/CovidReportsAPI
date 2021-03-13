"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogged = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
async function isLogged(req, res, next) {
    try {
        const headers = req.headers['authorization'];
        const token = headers.split(' ')[1];
        const publicKey = fs_1.default.readFileSync('./jwtRS256.key.pub', 'utf-8');
        const verify = await jsonwebtoken_1.default.verify(token, publicKey, {
            'algorithms': ['RS256']
        });
        if (verify) {
            next();
        }
        else {
            res.status(401).json({ error: 'You are not logged in' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }
}
exports.isLogged = isLogged;
