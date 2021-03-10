import chaiHttp  from 'chai-http';
import chai, { should } from 'chai';

const url: string = 'http://localhost:3000';
let token: string;

chai.use(chaiHttp);
chai.should();

describe('Home route tests', () => {
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

    it('Should retrieve all cases from the api', async() => {
        await chai.request(url).get('/').then((res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('data').which.is.an('object');
        });
    });

    it('Should retrieve cases near your location', async() => {
        await chai.request(url).get('/location').then((res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('data').which.is.an('object');
        });
    });

    it('Should retrieve cases from an specific country', async() => {
        await chai.request(url).get('/location/DR').set({"Authorization": `Bearer ${token}`}).then((res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('data').which.is.an('object');
        });
    });
});
