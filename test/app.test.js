const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex'); // connection
const app = require('../app');
const fixtures = require('./fixtures');

describe('CRUD Albums', () => {
	before((done) => {
		// run migrations
		// run seeds
		knex.migrate.latest().then(() => knex.seed.run()).then(() => done());
	});

	it('It lists all albums', (done) => {
		request(app)
			.get('/api/v1/albums')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('array');
				expect(res.body.length).to.deep.equal(fixtures.albums.length);
				done();
			});
	});
});

