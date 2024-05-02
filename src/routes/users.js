const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

const usersRouter = Router();

usersRouter.get("/", UsersController.list);
usersRouter.get("/:id", UsersController.find);
usersRouter.post("/", UsersController.create);
usersRouter.patch("/:id", UsersController.update);
usersRouter.delete("/:id", UsersController.delete);

module.exports = usersRouter;
