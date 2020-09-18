exports.up = function(knex) {
	return knex.schema.createTable('album', (table) => {
		table.increments().primary();
		table.text('album').notNullable();
		table.text('artist').notNullable();
		table.text('genre').notNullable();
		table.integer('year').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('album');
};
