import { Router } from "express";
import { UserController } from "../controller/UserController";
import { validateMiddleware } from "../middlewares/ValidateMiddleware";
import { CreateUserDTO, UpdateUserDTO } from "../dtos";

const routes = Router();
const userController = new UserController();

//Routes of Users
routes.get('/users', userController.list)
routes.get('/users', userController.show)
routes.post('/users', validateMiddleware(CreateUserDTO), userController.create)
routes.patch('/users', validateMiddleware(UpdateUserDTO), userController.update)
routes.delete('/users', userController.delete)

export default routes;