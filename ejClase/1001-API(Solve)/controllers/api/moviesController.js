// sequelize
const db = require('../../database/models');

// sequelize operators
const { Sequelize } = require('../../database/models');
const Op = Sequelize.Op

// require request file
const apiReq = require('../../req/moviesReq');

module.exports = {
    apiList: (req,res) =>{
        db.Movie.findAll({
            order: [
                ['title', 'ASC']
            ],
        })
        .then(movies => { res.json(movies) })
        .catch((err)=>(console.log(err)));
    },
    apiDetail: (req,res) =>{
        let id = req.params.id
        db.Movie.findByPk(id)
        .then(movie => { res.json(movie) })
        .catch((err)=>(console.log(err)));
    },
    apiCreate: (req,res) =>{
        res.send('api creación de elmento')
    },
    apiUpdate: (req,res) =>{
        res.send('api actualización de elemento')
    },
    apiDelete: (req,res) =>{
        res.send('api borrado de elemento')
    },
    
};