const axios = require('axios');
const def = require('./default');
const url = '/movies'

module.exports = {
    moviesList: ()=>{
        axios({
            ...def,
            method: 'get',
            url: `${url}/list`
        })
    },
}