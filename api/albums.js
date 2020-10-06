const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
	if (!isNaN(req.params.id)) return next();
	next(new Error('Invalid Id'));
}

function validAlbum(album) {
	const hasAlbumName = typeof album.album === 'string' && album.album.trim() != '';
	const hasArtist = typeof album.artist === 'string' && album.artist.trim() != '';
	const hasGenre = typeof album.genre === 'string' && album.genre.trim() != '';
	const hasYear = typeof album.year === 'number' && album.year.toString().length === 4;
	return hasAlbumName && hasArtist && hasGenre && hasYear;
}

router.get('/albums', (req, res) => {
	queries.getAll().then((albums) => {
		res.json(albums);
	});
});

router.get('/albums/:id', isValidId, (req, res, next) => {
	queries.getOne(req.params.id).then((album) => {
		if (album) {
			res.json(album);
		} else {
			next();
		}
	});
});

router.get('/artists', (req, res) => {
	queries.getAll().then((albums) => {
		let artists = [];
		albums.forEach((album, i) => {
			if (!artists.includes(album.artist)) {
				artists.push(album.artist);
			}
		});

		artists = artists.map((artist, i) => {
			return { id: i + 1, artist: artist };
		});

		res.json(artists);
	});
});

router.get('/artists/:id', isValidId, (req, res, next) => {
	const artistId = parseInt(req.params.id);

	queries.getAll().then((albums) => {
		const allArtists = albums.map((album) => {
			return { id: album.id, artist: album.artist };
		});

		if (artistId < allArtists.length) {
			const artist = allArtists.find((artist) => artist.id === artistId);

			const artistAlbums = albums.reduce((acc, album) => {
				if (artist.artist === album.artist) {
					acc.push({ id: album.id, name: album.album, genre: album.genre, year: album.year });
				}
				return acc;
			}, []);

			res.json({ ...artist, albums: artistAlbums });
		} else {
			next(new Error('Invalid Artist Id'));
		}
	});
});

router.post('/albums', (req, res, next) => {
	if (validAlbum(req.body)) {
		queries.create(req.body).then((albums) => res.json(albums[0]));
	} else {
		next(new Error('Invalid Album'));
	}
});

router.put('/albums/:id', isValidId, (req, res, next) => {
	if (validAlbum(req.body)) {
		queries.update(req.params.id, req.body).then((albums) => res.json(albums[0]));
	} else {
		next(new Error('Invalid Album'));
	}
});

router.delete('/albums/:id', isValidId, (req, res, next) => {
	queries.delete(req.params.id, req.body).then(() => res.json({ deleted: true }));
});

module.exports = router;
