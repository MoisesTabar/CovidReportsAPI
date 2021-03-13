"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = mongoose_1.model('user', new mongoose_1.Schema({
    nationalId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    names: {
        type: String
    },
    lastName: {
        type: String
    },
    birthDate: {
        type: Date
    },
    birthPlace: {
        type: String
    },
    gender: {
        type: String
    }
}));
