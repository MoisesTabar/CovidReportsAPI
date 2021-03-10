import { Schema, model, Model, Document } from 'mongoose';

export interface reportDto extends Document{
    place: string;
    type: string;
    date: Date;
    description?: string;
}

export const reportSchema = model<reportDto>('report', new Schema({
    place: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        default: 'No description provided'
    },
    madeBy: {
        type: { type: Schema.Types.ObjectId, ref: 'user'}
    }
}));