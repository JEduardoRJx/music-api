let albums = require('../albums');
albums = albums.map((album, i) => {
	return { ...album, id: i + 1 };
});

const album = {
  "album": "Man on the Moon II: The Legend of Mr. Rager",
  "artist": "Kid Cudi",
  "genre": "Hip Hop",
  "year": 2010
}

module.exports = {
  albums,
  album
};

