var express = require('express');
var router = express.Router();
const moviesRouterApi = require('./movies')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Api' });
});

/* GET movies. */
router.use('/movies', moviesRouterApi);

module.exports = router;