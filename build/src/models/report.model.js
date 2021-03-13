"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportSchema = void 0;
const mongoose_1 = require("mongoose");
exports.reportSchema = mongoose_1.model('report', new mongoose_1.Schema({
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
        type: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' }
    }
}));
