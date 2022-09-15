import chai from 'chai'
import chaiHttp from 'chai-http';
import { describe, it } from 'node:test';
const server = require("src/controllers/car-controller.ts")

chai.should();
chai.use(chaiHttp);

describe('car api', () => {
    it('should return all cars', (done) => {
        chai.request(server)
            .get("/cars")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                done()
            })
    })
})
