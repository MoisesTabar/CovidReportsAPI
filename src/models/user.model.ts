import { Schema, model } from 'mongoose';

export const userSchema = model('user', new Schema({
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
