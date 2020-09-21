const knex = require('../db/knex'); // connection

describe('CRUD Albums', () => {
	before((done) => {
		// run migrations
		// run seeds
		knex.migrate.latest().then(() => knex.seed.run()).then(() => done());
	});
});
