import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
import { log } from 'node:console';


dotenv.config()

interface Payload {
    id: number
    email: string
}

export function generateToken(Payload: Payload) {
    //chama o metodo da biblioteca do JWT 'sing'
    //sing precisa que passemos,nesta ordem:
    // 1 payload
    // 2 segredo que vem pelo dotenv
    // 3 e um objeto com a o atributo
    return jwt.sign(Payload, process.env.JWT_SECRET!, {
        expiresIn: Number(process.env.JWT_EXPIRES_IN)
    })
}

//TESTE DE GERAÇAO DE TOKEN
/*console.log(generateToken({
     id: 1,
     email: "JuninhoPernambucano@gmail.com"
}));*/

export function verifyToken(token: string) {
    //dentro do try catch
    //chamamos o metodo da bilbioteca do JWT 'verify'
    //ele precisa que passemos, a ordem:
    // 1 o propio token
    // 2 o segrego/JWT_SECRET
    try {
        return jwt.verify(token, process.env.JWT_SECRET!)
    } catch {
        return null;
    }
}
//VIRIFCANDO TOKEN
//console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJKdW5pbmhvUGVybmFtYnVjYW5vQGdtYWlsLmNvbSIsImlhdCI6MTc4ODIxNzkzNiwiZXhwIjoxNzg4MzA0MzM2fQ.dh_qb81TFYX11MMuoOUVROldaIe47m_imsPH5aVZ22k"));


