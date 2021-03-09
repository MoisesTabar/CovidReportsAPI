import { Schema, model, Model, Document } from 'mongoose';

export interface userDto extends Document{
    nationalId: string,
    password: string,   
    names: string
}

export const userSchema = model<userDto>('user', new Schema({
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
