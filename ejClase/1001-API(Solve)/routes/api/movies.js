var express = require('express');
var router = express.Router();
const moviesController = require('../../controllers/api/moviesController')

/* GET movies. */
router.get('/list', moviesController.apiList);
router.get('/detail/:id', moviesController.apiDetail);
router.get('/create', moviesController.apiCreate);
router.get('/update/:id', moviesController.apiUpdate);
router.get('/delete/:id', moviesController.apiDelete);

module.exports = router;