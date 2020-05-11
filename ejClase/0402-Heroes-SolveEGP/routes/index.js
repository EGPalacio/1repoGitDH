var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', controller.index)
router.get('/heroes', controller.heroes)
router.get('/heroes/detalle', controller.detalle)
router.get('/heroes/detalle/:id', controller.detalleId)
router.get('/heroes/bio/:id?/:ok?', controller.bio)
router.get('/heroes/creditos', controller.creditos)

module.exports = router;
