import { Router } from "express";
import { CharacterController } from "../controller/CharacterController";
import { validateMiddleware } from "../middlewares/ValidateMiddleware";
import { CreateCharacterDTO } from "../dtos";

const routes = Router();
const characterController = new CharacterController();

//Routes of Users
routes.get('/characters', characterController.list)
routes.get('/characters/:id', characterController.show)
routes.post('/characters', validateMiddleware(CreateCharacterDTO), characterController.create)
routes.delete('/characters/:id', characterController.delete)

export default routes;