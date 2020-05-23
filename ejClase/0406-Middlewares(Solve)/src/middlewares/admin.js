const adminMidd = (req,res,next) => {
    if(req.query.user === 'Ada'
        || req.query.user === 'Greta'
        || req.query.user === 'Vim'
        || req.query.user === 'tim'
        ){
            req.adminCheck = `Hola Admin ${req.query.user}`
            next();
    } else {
        // res.redirect('error');
        res.send('No tienes los privilegios para ingresar');
    }
};

module.exports = adminMidd