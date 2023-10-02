const { Router } = require("express");
const usersController = require("../controllers/usersController");

const usersRouter = Router();

usersRouter.post("/", usersController.createUser); // para crear
usersRouter.get("/", usersController.getAllUsers); // para leer o consultar
usersRouter.get("/:id", usersController.getUser); // para leer solo uno
usersRouter.put("/:id", usersController.updateUser); // para actualizar
usersRouter.delete("/:id", usersController.deleteUser); // para eliminar

module.exports = usersRouter;
