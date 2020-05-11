// WARNING, no está funcionando este js

const fs = require('fs');
const path = require('path');

// const parsingFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const parsingFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const heroesFilePath = './public/data/heroes.json'

module.exports = {
	getHeroes: () => parsingFile(heroesFilePath),
}