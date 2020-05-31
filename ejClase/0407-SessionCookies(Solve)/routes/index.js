var express = require('express');
var router = express.Router();
const testBackController = require('../controller/testBackController');
const recomendados = require('../controller/recomendados')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session', testBackController.session);
router.post('/session', testBackController.sessionPost);

router.get('/recomendados', recomendados);

module.exports = router;
