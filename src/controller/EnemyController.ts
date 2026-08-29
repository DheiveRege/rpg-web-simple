import { Request, response, Response } from "express";
import { EnemyService } from "../service/EnemyService";

const enemyService = new EnemyService();
export class EnemyController {

    create(req: Request, res: Response) {
        const { name, health, agility, strength, mana } = req.body;

        const enemy = enemyService.create(name, health, agility, strength, mana);
        return res.status(201).json(enemy)
    }

    delete(req: Request, res: Response){
        const enemy =  enemyService.delete(Number(req.params.id))
    }

}