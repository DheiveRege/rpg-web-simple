import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

const userService = new UserService();

export class UserController {
    async list(req: Request, res: Response) {
        const users = await userService.list();
        return res.json(users);
    }

    async show(req: Request, res: Response) {
        const user = await userService.show(Number(req.params.id));
        return res.json(user);
    }

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const user = await userService.create({
            name,
            email,
            password
        });

        return res.status(201).json(user);
    }

    async update(req: Request, res: Response) {
        const { name, email } = req.body;

        const user = await userService.update(
            Number(req.params.id),
            {
                name,
                email
            }
        );

        return res.json(user);
    }

    async delete(req: Request, res: Response) {
        await userService.delete(Number(req.params.id));

        return res.status(204).send();
    }
}