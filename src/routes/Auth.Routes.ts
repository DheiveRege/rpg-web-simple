import { Router } from "express";
import { AuthController } from "../service/AuthService";

const routes = Router();
const authController = new AuthController();

routes.get('/auth/login', authController.login)

export default routes;