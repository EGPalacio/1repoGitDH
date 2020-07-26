var express = require('express');
var router = express.Router();
const moviesRouter = require('./movies')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET movies. */
router.get('/movies/?', moviesRouter);
router.get('/movies/detail/:id', moviesRouter);
router.get('/movies/new', moviesRouter);
router.get('/movies/recomended', moviesRouter);
router.post('/movies/search', moviesRouter);

module.exports = router;