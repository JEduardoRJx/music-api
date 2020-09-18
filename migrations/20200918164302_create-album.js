exports.up = function(knex) {
	return knex.schema.createTable('album', (table) => {
		table.increments();
		table.text('album');
		table.text('artist');
		table.text('genre');
		table.integer('year');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('album');
};
