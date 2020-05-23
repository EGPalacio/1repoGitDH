const userLogs = (req,res,next) => {
    const fs = require('fs');
    const path = require('path');

    let dirPath = path.join(__dirname, '../logs')
    let filePath = path.join(__dirname, '../logs/userLogs.txt');
    let userLog = `El usuario ingresó a la ruta: ${req.url} \n`;

    if (!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath);
        console.log('logs dir created.');
    };

    fs.appendFile(filePath, userLog, (err) => {
        if (err) throw err;
        console.log(userLog);
    }
    );

    next();
}

module.exports = userLogs