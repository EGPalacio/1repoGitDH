// TRABAJO SIN INICIAR
//====================

// Tomar como input cuatro variables por consola [eMail, user, pass, confPas]

// Requerir el JSON de usuarios y preparar el array de la lista de usuarios.
// Verificar que el eMail existe y encontrar la posición en el JSON de eMails
// si el eMail no existe devolver un mns de error que se debe verificar el eMail primero
// si el eMail existe, requerir el dato de usuario y password
// controlar que la password tenga letras, números y al menos 4 posiciones
// controlar que la password confirmada coincida con la password cargada en la posición anterior.

// Agregar en la posición que corresponda al correo indicado las propiedades de usser y password validadas


const user = process.argv[2]
const pass = process.argv[3]
const passConf = process.argv[4]

console.log()
console.log(process.argv)