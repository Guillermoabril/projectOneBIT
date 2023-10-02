const Router = require("express");
const clientsController = require("../controllers/clientsController");

const router = Router();

router.post("/", clientsController.createClient);
router.get("/", clientsController.readAllClients);
router.get("/:id", clientsController.readClient);
router.put("/:id", clientsController.updateClient);
router.delete("/:id", clientsController.deleteClient);

module.exports = router;
