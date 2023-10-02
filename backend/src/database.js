const mongoose = require("mongoose");

/* en este archivo se realiza la coneccion con la base de datos 
usando mongo. En el comando connect va el nombre de la variable que se uso
en el archivo .env para importar la base de datos desde mongo atlas

*/
mongoose
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((db) => console.log(`Successfully! Database connected.`))
  .catch((error) => console.log(`Failed. Database isn't connected.`));
