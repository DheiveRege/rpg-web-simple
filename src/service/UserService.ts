import { AppDataSource } from '../config/DataSource';
import { BadRequestError, ConflictError, NotFound } from '../errors';
import { User } from '../models/User';

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

    async create(name: string, email: string, password: string) {
        if (!name || !email || !password) {
            throw new BadRequestError('Name and email are required');
        }

        const exists = await userRepository.findOneBy({ email });

        if (exists) {
            throw new ConflictError('Email already in use');
        }

        const user = userRepository.create({
            name,
            email,
            password
        });

        await userRepository.save(user)

        return user;
    }

    async update(id: number, name?: string, email?: string, password?: string) {

        const user = await userRepository.findOneBy({ id });

        if (password) {
            user?.password
        }
        if (!user) {
            throw new NotFound('User not found');
        }

        if (name) {
            user.name = name;
        }

        if (email) {
            const exists = await userRepository.findOneBy({ email });

            if (exists && exists.id !== user.id) {
                throw new ConflictError('Email already in use');
            }

            user.email = email;
        }

        await userRepository.save(user);

        return user;
    }

    async delete(id: number) {
        const user = await userRepository.findOneBy({ id });

        if (!user) {
            throw new NotFound('User not found');
        }

        await userRepository.remove(user);
    }
}