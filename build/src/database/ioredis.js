"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnection = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
function redisConnection(uri) {
    try {
        const redis = new ioredis_1.default(uri);
        const connectionStatus = redis.status;
        if (connectionStatus == 'connecting') {
            console.log(`Redis connection established correctly: ${connectionStatus}`);
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.redisConnection = redisConnection;
