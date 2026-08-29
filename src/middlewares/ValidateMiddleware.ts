import { Request, Response, NextFunction } from "express";
import z from "zod";

export function validateMiddleware(dto: z.ZodType) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            dto.parse(req.body)
            next()
        } catch (error) {
            next(error)
        }
    }
    
}
