const chai = require('chai')
const chaiHttp = require('chai-http')
const nock = require("nock")

// Configure chai
chai.use(chaiHttp);
chai.should();
const result = { "msg": "success", "clinics": { "name": "Scratchpay Official practice", "state": "Tennessee", "availability": { "from": "00:00" } } };

describe("Clinics", () => {
  describe("GET /", () => {
    before(function () {
      const scope = nock("http://localhost:3000")
        .get("/")
        .reply(200, result);
    });
    it("should get all clinics record", (done) => {
      chai.request("http://localhost:3000")
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe("POST /", () => {
    before(function () {
      const scope = nock("http://localhost:3000")
        .post("/")
        .reply(200, result);
    });
    it("should get all clinics record based on criteria", (done) => {
      chai.request("http://localhost:3000")
        .post('/')
        .send({ "name": "Scratchpay Official practice", "state": "Tennessee", "availability": { "from": "00:00" } })
        .end(function (err, res) {
          if (err) done(err);
          res.body.should.have.property('clinics');
          res.body.clinics.should.have.property('name', 'Scratchpay Official practice');
        });
      done();
    });
  });
});