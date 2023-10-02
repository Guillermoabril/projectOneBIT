/*
el modulo dotenv nos permite usar las variables de entorno, permite saber
que existe este archivo .env y que tiene unas variables que vamos a utilizar

El llamado de databse se usa para importar la base de datos al index
se importa en el index.js porque este archivo es el punto de ingreso de la API
*/

require("dotenv").config();
require("./database");

const server = require("./server"); // aqui importo el modulo servidor propio

const port = server.get("port"); // quiero obtengo el puerto guardado en PORT variable de entorno

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
