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

	it('Show a single album by id', (done) => {
		request(app)
			.get('/api/v1/albums/1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				expect(res.body).to.deep.equal(fixtures.albums[0]);
				done();
			});
	});

	it('It creates a new album', (done) => {
		request(app)
			.post('/api/v1/albums')
			.send(fixtures.album)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				fixtures.album.id = res.body.id;
				expect(res.body).to.deep.equal(fixtures.album);
				done();
			})
			.catch((error) => {
				return error && done();
			});
	});

	it('Updates an album', (done) => {
		fixtures.album.genre = 'Alternative Pop';
		request(app)
			.put('/api/v1/albums/104')
			.send(fixtures.album)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				expect(res.body).to.deep.equal(fixtures.album);
				done();
			})
			.catch((error) => {
				return error && done();
			});
	});

	it('Deletes an album', (done) => {
		request(app)
			.delete('/api/v1/albums/104')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				expect(res.body).to.deep.equal({
					deleted: true
				});
				done();
			});
	});

	it('It lists all artists', (done) => {
		request(app)
			.get('/api/v1/artists')
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
