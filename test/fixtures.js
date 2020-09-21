let albums = require('../albums');
albums = albums.map((album, i) => {
	return { ...album, id: i + 1 };
});

module.exports = {
	albums
};
