// ingreso nuevo e-mail por terminal
const eMailReg = process.argv[2]

//Traemos el modulo de filesystem de nodejs
const fs = require("fs");
//Leemos el archivo (sincrónicamente)
const userJSON = fs.readFileSync("user.json", { encoding: "utf-8" });
//Parseamos el string de JSON a un array de users.
const userFileParse = JSON.parse(userJSON);

// Generamos un Array con la lista de eMails
let userList = userFileParse.map(
    function (userObj){
        return userObj.eMail;
    }
)

if (eMailReg.indexOf('@') < 0){
    console.log(`${eMailReg} no cumple los requisitos de ingreso`);
    }
else if (eMailReg.indexOf('.', (eMailReg.length - 4)) < 0){
    console.log(`${eMailReg} no cumple los requisitos de ingreso`);
    }
else if (userList.indexOf(eMailReg) >= 0){
        console.log(`${eMailReg} ya existe`);
        }
else if (userList.indexOf(eMailReg) < 0){
        userFileParse.push(
            {
                eMail: eMailReg
            }
        )
        }
else {console.log(`revisar código`)}

//Convertimos el array de logs a un string de JSON
const strigified = JSON.stringify(userFileParse, null, 4);

//Escribimos el string al archivo 'logs.json'
fs.writeFileSync("user.json", strigified);
