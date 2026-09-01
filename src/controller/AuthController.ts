import { Request, Response } from 'express';
import { AuthService } from '../service/AuthService';

const authService = new AuthService();

export class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await authService.login(email, password);

        return res.json(user);
    }
}