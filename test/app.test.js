const knex = require('../db/knex'); // connection

describe('CRUD Albums', () => {
	before(() => {
		// run migrations
		knex.migrate.latest().then(() => knex.seed.run());
		// run seeds
	});
});
