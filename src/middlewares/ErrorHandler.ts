import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { ZodError } from "zod/v3";

export async function errorHanler(error: Error | AppError | ZodError, req: Request, res: Response, next: NextFunction) {

    console.error(error)

    if (error instanceof ZodError) {
        const issues = error.issues.map(e => e.message)
        return res.status(400).json({ issues })
    }

    if (error instanceof AppError) {

        return res.status(error.statusCode).json({ message: error.message })
    }

    return res.status(500).json({ message: 'Internal server error' })
}