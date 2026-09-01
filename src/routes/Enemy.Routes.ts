import { Router } from "express";
import { EnemyService } from "../service/EnemyService";
import { EnemyController } from "../controller/EnemyController";

const routes = Router();
const enemy = new EnemyController();

routes.get('/enemy', enemy.create);
routes.delete('/enemy/id:', enemy.delete);