// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres://localhost/musicdb'
	},
	test: {
		client: 'pg',
		connection: 'postgres://localhost/test-musicdb'
	}
};
