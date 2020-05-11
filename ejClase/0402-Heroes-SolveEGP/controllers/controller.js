const fs = require('fs')
const jasonParse = JSON.parse(fs.readFileSync('./public/data/heroes.json', 'utf8'));

const controller = {
    index: (req,res) => {
        res.render('index', {
                                title: 'index',
                                linkHeroes: controller.heroes,
                             });
    },
    heroes: (req,res) => {
        //const jasonParse = require('../public/javascripts/jasonParse');
        res.render('heroes', {
                                title: 'heroes',
                                jasonParse: jasonParse,
                                });
    },
    detalle: (req,res) => {
        res.render('detalle', {
                                title: 'detalle',
                                jasonParse: jasonParse,
                                });
    },
    detalleId: (req,res) => {
        res.render('detalleId', {
                                title: 'detalleId',
                                jasonParse: jasonParse,
                                item: req.params.id,
                                });
    },
    bio: (req,res) => {
        res.render('bio', {
                            title: 'bio',
                            jasonParse: jasonParse,
                            id: req.params.id,
                            ok: req.params.ok,
                            });
    },
    creditos: (req,res) => {
        res.render('creditos', {title: 'creditos'});
    },
}

module.exports = controller