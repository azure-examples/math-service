const assert = require('assert');
const request = require('supertest');
const sinon = require('sinon');

const math = require('../../main/shared/math');
const app = require('../../main/resources/add');

describe('The api module', () => {
  let sandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Add Resource', () => {
    it('should return 3 when 1 and 2 are passed.', () => {
      return request(app)
          .get('/add')
          .query('num1=1')
          .query('num2=2')
          .expect(200)
          .expect('Content-Type', /json/)
          .then((response) => {
            assert.equal(response.body.sum, 3);
          });
    });

    it('should return 400 when num1 is not passed.', () => {
      return request(app)
          .get('/add')
          .query('num2=2')
          .expect(400)
          .expect('Content-Type', /json/)
          .then((response) => {
            assert(response.body.message.match(/query parameters must be passed/));
          });
    });

    it('should return 500 when the math library throws an exception.', () => {
      const MESSAGE = 'Test Error';
      sandbox.stub(math, 'Add').throws(new Error(MESSAGE));

      return request(app)
          .get('/add')
          .query('num1=1')
          .query('num2=2')
          .expect(500)
          .expect('Content-Type', /json/)
          .then((response) => {
            assert.equal(response.body.message, MESSAGE);
          });
    });
  });
});

