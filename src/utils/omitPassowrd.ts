import { User } from "../models/User"

// Remove a senha do objeto de usuário antes de retornar para o cliente
export function omitPassword(user: User) {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
}
