const db = require('../database/models');
const { Sequelize } = require('../database/models');
const Op = Sequelize.Op

module.exports = {
    moviesList: (req, res) => {
        db.Movie.findAll({
                order: [
                    ['title', 'ASC']
                ],
            })
            .then(movies => {
                console.log(movies);
                res.render('moviesList', {
                    tag: 'movieList',
                    title: 'listado de Películas',
                    movies: movies,
                });
            });
    },
    movieDetail: (req, res) => {
        let idPelicula = req.params.id;
        console.log(idPelicula);

        db.Movie.findByPk(idPelicula)
            .then(movie => {
                console.log(movie);
                res.render('movieDetail', {
                    title: 'movieDetail',
                    movie: movie,
                });
            });
    },
    moviesNew: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        }).then(movies => {
            console.log(movies);
            res.render('moviesList', {
                tag: 'new',
                title: 'Te mostramos los estrenos de este mes',
                movies: movies,
            })

        });
    },
    moviesRecomended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {
                    [Op.gt]: 8
                }
            },
            order: [
                ['title', 'ASC']
            ],
            limit: 5
        }).then(movies => {
            console.log(movies);
            res.render('moviesList', {
                tag: 'recomended',
                title: 'Estas son nuestras pelis recomendadas!',
                movies: movies,
            })

        });
    },
    moviesSearchResult: (req, res) => {
        let query = req.body.search
        console.log(query);

        db.Movie.findAll({
                where: {
                    title: {
                        [Op.like]: `%${query}%`
                    }
                }
            })
            .then(movies => {
                res.render('moviesList', {
                    tag: ',earchResult',
                    title: 'Encontramos estas pelis según tu búsqueda',
                    movies: movies,
                })
            })
    },
};