import React from 'react';
let titulo = 'Mi primer sitio de React.js';
let parrafo = require('../data/articulo').texto;
let imagen = 'https://placeimg.com/500/240/nature';

export default function Content() {
    return (
        <div>
            <h1>{titulo}</h1>;
            <img src={imagen}/>
            <p>{parrafo}</p>;
        </div>
    )
}
