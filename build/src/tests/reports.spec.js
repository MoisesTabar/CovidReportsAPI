"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_http_1 = __importDefault(require("chai-http"));
const chai_1 = __importDefault(require("chai"));
const url = 'http://localhost:3000';
let token;
chai_1.default.use(chai_http_1.default);
chai_1.default.should();
describe('Reports routes tests', () => {
    before(async () => {
        await chai_1.default.request(url).post('/auth/login').send({
            "nationalId": "xd",
            "password": "Moises"
        }).then((res) => {
            chai_1.default.expect(res).to.have.status(200);
            chai_1.default.expect(res.body).to.have.property('message').which.is.an('string');
            chai_1.default.expect(res.body).to.not.be.empty;
            token = res.body.message;
        });
    });
    it('Should create a report', async () => {
        await chai_1.default.request(url).post('/report/create').set({ "Authorization": `Bearer ${token}` }).send({
            "place": "Someplace",
            "type": "Something",
            "description": "A description"
        }).then((res) => {
            chai_1.default.expect(res).to.have.status(201);
            chai_1.default.expect(res.body).to.have.property('message').which.is.an('string');
        });
    });
});
