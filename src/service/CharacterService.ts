import { AppDataSource } from "../config/DataSource";
import { BadRequestError, ConflictError, NotFound } from "../errors";
import { Character } from "../models/Character";


const characterRepository = AppDataSource.getRepository(Character);

export class CharacterService {
    async list() {
        return characterRepository.find({
            relations: { user: true },
            order: {
                id: 'ASC'
            }
        });
    }

    async show(id: number) {
        const character = await characterRepository.findOne({
            where: { id },
            relations: { user: true }
        });
        if (!character) {
            throw new NotFound('Character not found');
        }
        return character;
    }

    async create(name: string, className: string) {
        if (!name || !className) {
            throw new BadRequestError('Name and class are required');
        }

        let character: Character;

        switch (className) {
            case "Warrior":
                character = characterRepository.create({
                    name,
                    className,
                    health: 100,
                    maxHealth: 100,
                    strength: 10,
                    agility: 5,
                    mana: 0
                });
                break;

            case "Mage":
                character = characterRepository.create({
                    name,
                    className,
                    health: 80,
                    maxHealth: 80,
                    strength: 2,
                    agility: 3,
                    mana: 15
                });
                break;

            case "Ladino":
                character = characterRepository.create({
                    name,
                    className,
                    health: 75,
                    maxHealth: 75,
                    strength: 7,
                    agility: 8,
                    mana: 0
                });
                break;

            case "Archeir":
                character = characterRepository.create({
                    name,
                    className,
                    health: 80,
                    maxHealth: 80,
                    strength: 6,
                    agility: 10,
                    mana: 0
                });
                break;
            default:
                throw new BadRequestError('invalid class')
        }

    }

    async delete(id: number) {
        const character = await characterRepository.findOneBy({ id });

        if (!character) {
            throw new NotFound('Character not found');
        }

        await characterRepository.remove(character);
    }
}   