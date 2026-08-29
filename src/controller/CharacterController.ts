import { Request, Response } from 'express';
import { CharacterService } from '../service/CharacterService';

const characterService = new CharacterService();

export class CharacterController {
    async list(req: Request, res: Response) {
        const chraacter = await characterService.list();
        return res.json(chraacter);
    }

    async show(req: Request, res: Response) {

        const chraacter = await characterService.show(Number(req.params.id));
        return res.json(chraacter);

    }

    async create(req: Request, res: Response) {

        const { name, className, userId } = req.body;

        const character = await characterService.create(name, className, userId);
        console.log("TESTEE controller");

        return res.status(201).json(character);

    }


    async delete(req: Request, res: Response) {

        await characterService.delete(Number(req.params.id));

        return res.status(204).send();

    }
}