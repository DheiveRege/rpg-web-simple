import { AppDataSource } from '../config/DataSource';
import { BadRequestError, ConflictError, NotFound } from '../errors';
import { User } from '../models/User';
import { generateToken } from '../utils/jwt';
import bcrypt from "bcrypt";
import { omitPassword } from '../utils/omitPassowrd';

const userRepository = AppDataSource.getRepository(User);

export class UserService {
    async list() {
        return userRepository.find({
            relations: { character: true },
            order: {
                id: 'ASC'
            }
        });
    }

    async show(id: number) {
        const user = await userRepository.findOne({
            where: { id },
            relations: { character: true }
        });

        if (!user) {
            throw new NotFound('User not found');
        }

        return user;
    }

    async create(data: { name: string, email: string, password: string }) {
        // Este método gera uma senha criptografada
        const hashedPassword = await bcrypt.hash(data.password, 10)

        // cria o usuário
        const user = userRepository.create({
            name: data.name,
            email: data.email,
            password: hashedPassword
        })

        // salva ele no banco
        const savedUser = await userRepository.save(user)

        // Retornamos o usuário sem a senha
        return omitPassword(savedUser)
    }
    async login(data: { email: string, password: string }) {
        // Primeiro buscamos o usuário pelo email
        // Esse findOne por email será usado no login
        const user = await userRepository.findOne({ where: { email: data.email } })

        // Se não encontrou usuário com esse email, lançamos erro
        if (!user) {
            throw new NotFound("Usuário não encontrado!")
        }

        // Agora comparamos a senha enviada com a senha criptografada no banco
        const passwordIsValid = await bcrypt.compare(data.password, user.password)

        // Se a senha estiver errada, lançamos erro de autorização
        if (!passwordIsValid) {
            throw new NotFound("Senha inválida!")
        }

        // Se chegou até aqui, email e senha estão corretos
        // Então podemos gerar o token JWT
        const token = generateToken({
            id: user.id,
            email: user.email
        })

        // Retornamos o usuário sem senha e o token
        return {
            user: omitPassword(user),
            token
        }
    }

    async update(id: number, data: { name?: string, email?: string, password?: string }) {
        // encontra o usuário pelo id
        const user = await userRepository.findOne({ where: { id } })

        if (!user) {
            throw new NotFound("Usuário não encontrado!")
        }

        // Só vamos alterar/atualizar os campos que vierem
        if (data.name) user.name = data.name
        if (data.email) user.email = data.email

        // Se vier uma senha nova, a gente precisa criptografar ela de novo
        if (data.password) user.password = await bcrypt.hash(data.password, 10)

        // Depois de tudo isso acima, salvamos de novo
        // Como o user já possui id, o TypeORM entende que é atualização, não novo cadastro
        const updatedUser = await userRepository.save(user)

        // Retorna o usuário sem a senha
        return omitPassword(updatedUser)
    }

    async delete(id: number) {
        const result = await userRepository.delete(id)

        if (result.affected === 0) {
            throw new NotFound("Usuário não encontrado!")
        }
    }
}