const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
	if (!isNaN(req.params.id)) return next();
	next(new Error('Invalid Id'));
}

router.get('/', (req, res) => {
	queries.getAll().then((albums) => {
		res.json(albums);
	});
});

router.get('/:id', isValidId, (req, res) => {
	res.json({
		message: 'single route yo'
	});
});

module.exports = router;
