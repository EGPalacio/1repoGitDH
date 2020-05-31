const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}

const recomendados = (req, res) => {

    // let preferencias = req.cookie.preferencias;
    const preferencias = 'remeras'
    const productos = listadoProductos[preferencias]
    res.send(productos)
	//res.render('productos', {productos: productos});
}

module.exports = recomendados