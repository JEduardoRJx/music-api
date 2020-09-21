const knex = require('./knex'); // the connection

module.exports = {
	getAll() {
		return knex('album');
	},
	getOne(id) {
		return knex('album').where('id', id).first();
	}
};
