import chaiHttp  from 'chai-http';
import chai, { should } from 'chai';

const url: string = 'http://localhost:3000';

chai.use(chaiHttp);
chai.should();

describe('Home route tests', () => {
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
        await chai.request(url).get('/location/DR').then((res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('data').which.is.an('object');
        });
    });
});
