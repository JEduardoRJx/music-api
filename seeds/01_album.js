const albums = require('../albums');

exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('album').del().then(() => {
		// Inserts seed entries
		return knex('album').insert(albums);
	});
};
