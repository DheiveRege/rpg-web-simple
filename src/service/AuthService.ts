import { NextFunction, Request, Response } from "express"
import { UserService } from "../service/UserService"

const userService = new UserService();

export class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            const result = await userService.login({
                email,
                password
            });

            return res.json(result);

        } catch (error) {
            next(error);
        }
    }
}
