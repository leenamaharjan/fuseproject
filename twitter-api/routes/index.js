var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var Twit = require('twit');
var config = require('../config.js')

var T = new Twit(config);

/* GET home page. */
router.get('/:query', (req, res, next) => {
	let query = req.params.query;

	T.get('search/tweets', { q: query, count: 10 }, function(err, data, response) {
		if (err) {
			res.json({ err });
		}
		res.json(data);
	});
});

module.exports = router;
