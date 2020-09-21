const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
	if (!isNaN(req.params.id)) return next();
	next(new Error('Invalid Id'));
}

function validAlbum(album) {
	const hasName = typeof album.name === 'string' && album.name.trim() != '';
	const hasArtist = typeof album.artist === 'string' && album.artist.trim() != '';
	const hasGenre = typeof album.genre === 'string' && album.genre.trim() != '';
	const hasYear = typeof album.year === 'number' && album.year.toString() === 4;
	return hasName && hasArtist && hasGenre && hasYear
}

router.get('/', (req, res) => {
	queries.getAll().then((albums) => {
		res.json(albums);
	});
});

router.get('/:id', isValidId, (req, res, next) => {
	queries.getOne(req.params.id).then((album) => {
		if (album) {
			res.json(album);
		} else {
			next();
		}
	});
});

router.post('/', (req, res, next) => {
	if (validAlbum(req.body)) {

	} else {
		next(new Error('Invalid Sticker'));
	}
});

module.exports = router;
