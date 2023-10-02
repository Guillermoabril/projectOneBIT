/*
aqui se guarda toda la configuracion del sevidor

*/

const express = require("express"); // estamos importando express
const morgan = require("morgan"); // morgan me ayuda a visualizar logs o peticiones al servidor
const usersRouter = require("./routers/usersRouter"); // se importan las rutas
const clientsRouter = require("./routers/clientsRouter");

const server = express(); // estamos creando un servidor
const port = process.env.PORT; //aqui se especifica por que puerto se requiere que corra el servidor o aplicacion

server.set("port", port); //

server.use(express.json());

server.use(morgan("dev")); // aqui indico que el servidor va a ausar morgan

server.use("/users/", usersRouter); // le indicamos el nombre de la ruta que queremo usar para consultar las rutas importadas desde el postman
server.use("/clients/", clientsRouter);

server.get("/", (request, response) => {
  response.json({ message: "Mensaje desde la ruta raiz o inicial" });
});

// cuando llegue una peticion en la ruta de arriba se va a ejecutar la funcion de arriba

module.exports = server;
