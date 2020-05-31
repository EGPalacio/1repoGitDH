
module.exports = {
    session: (req,res) => {
        let background = 'default'
        if (req.session.background){
            background = req.session.background;
            console.log(`estilo en session ${req.session.background}`);
            
        } else {
            background = req.cookies.background;
            console.log(`estilo en cookie ${req.cookies.background}`);
        };
        
        console.log(`session iniciada con fondo ${background}`);
        
        res.render('testBack', {
            tittle: 'testBack',
            background: background,
            colors: {
                default: 'white',
                rojo: 'red',
                azul: 'blue',
                verde:'green',
                amarillo: 'yellow',
                gris: 'grey',
            },
        });
    },
    sessionPost: (req,res) =>{
        req.session.background = req.body.background;
        console.log(`se guarda fondo en session - color: ${req.session.background}`);

        if(req.body.recordar == 'on'){
            res.cookie('background', req.session.background, {
                'maxAge': 380000,
            });
            console.log(`se guarda estilo con fondo color en cookie`);
        };
        res.redirect('session')
    },
};