"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const url = 'http://localhost:3000';
chai_1.default.use(chai_http_1.default);
chai_1.default.should();
describe('Auth routes tests', () => {
    it('Should register a user correctly if the id is available', async () => {
        await chai_1.default.request(url).post('/auth/signup').send({
            "nationalId": "xd",
            "password": "some"
        }).then((res) => {
            chai_1.default.expect(res).to.have.status(201);
            chai_1.default.expect(res.body).to.have.property('message').which.is.an('string');
            chai_1.default.expect(res.body).to.not.be.empty;
        });
    });
});
