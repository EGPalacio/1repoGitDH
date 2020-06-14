var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController')

/* GET movies. */
router.get('/movies', moviesController.moviesList);
router.get('/movies/detail/:id', moviesController.movieDetail);

router.get('/movies/new', moviesController.moviesNew);
router.get('/movies/recomended', moviesController.moviesRecomended);
router.post('/movies/search', moviesController.moviesSearchResult);

module.exports = router;