import chaiHttp from 'chai-Http';
import chai from 'chai';

const url: string = 'http://localhost:3000';
let token: string;

chai.use(chaiHttp);
chai.should();

describe('Reports routes tests', () => {
    before(async() => {
        await chai.request(url).post('/auth/login').send({
            "nationalId": "xd",
            "password": "Moises"
        }).then((res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('message').which.is.an('string');
            chai.expect(res.body).to.not.be.empty;
            token = res.body.message;
        });
    });

    it('Should create a report', async() => {
        await chai.request(url).post('/report/create').set({"Authorization": `Bearer ${token}`}).send({
            "place": "Someplace",
            "type": "Something",
            "description": "A description"
        }).then((res) => {
            chai.expect(res).to.have.status(201);
            chai.expect(res.body).to.have.property('message').which.is.an('string');
        });
    });
});