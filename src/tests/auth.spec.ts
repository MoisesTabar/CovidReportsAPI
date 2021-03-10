import chai from 'chai';
import chaiHttp from 'chai-http';

const url: string = 'http://localhost:3000';

chai.use(chaiHttp);
chai.should();

describe('Auth routes tests', () => {
    it('Should register a user correctly if the id is available', async() => {
        await chai.request(url).post('/auth/signup').send({
            "nationalId": "xd",
            "password": "some"
        }).then((res) => {
            chai.expect(res).to.have.status(201);
            chai.expect(res.body).to.have.property('message').which.is.an('string');
            chai.expect(res.body).to.not.be.empty;
        });
    });
});