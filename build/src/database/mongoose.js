"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function mongoConnection(uri) {
    try {
        mongoose_1.default.connect(uri, {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose_1.default.connection.once('open', () => {
            console.log('Database connected successfully');
        }).on('error', (error) => {
            console.log(`Database connection error ${error}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.mongoConnection = mongoConnection;
