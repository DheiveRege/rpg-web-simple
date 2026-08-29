import id from "zod/v4/locales/id.js";
import { AppDataSource } from "../config/DataSource";
import { BadRequestError, NotFound } from "../errors";
import { Character } from "../models/Character";
import { User } from "../models/User";
import { Not } from "typeorm";


const characterRepository = AppDataSource.getRepository(Character);
const userReposit = AppDataSource.getRepository(User)

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

    async create(name: string, className: string, userId: number) {

        if (!name || !className || !userId) {
            throw new BadRequestError('Name, class and accont are required');
        }

        let character = new Character();
        const user = await userReposit.findOneBy({ id: userId })

        if (!user) {
            throw new NotFound('User is not found')
        }

        switch (className) {
            case "Warrior":
                character.user = user
                character.className = className
                character.name = name
                character.health = 100
                character.maxHealth = 100
                character.strength = 10
                character.agility = 5
                character.mana = 0
                character.maxMana = 0


                console.log("TESTE1");

                break;

            case "Mage":
                character.user = user
                character.className = className
                character.name = name
                character.health = 70
                character.maxHealth = 70
                character.strength = 2
                character.agility = 4
                character.mana = 20
                character.maxMana = 50

                console.log("TESTE2");
                break;

            case "Ladino":
                character.user = user
                character.className = className
                character.name = name
                character.health = 75
                character.maxHealth = 75
                character.strength = 7
                character.agility = 11
                character.mana = 0
                character.maxMana = 0

                console.log("TESTE3");
                break;

            case "Archeir":
                character.user = user
                character.className = className
                character.name = name
                character.health = 80
                character.maxHealth = 80
                character.strength = 8
                character.agility = 10
                character.mana = 0
                character.maxMana = 0

                console.log("TESTE4");
                break;
            default:
                throw new BadRequestError('invalid class')
        }
        const newChar = await characterRepository.save(character)
    }

    async delete(id: number) {
        const character = await characterRepository.findOneBy({ id });

        if (!character) {
            throw new NotFound('Character not found');
        }

        await characterRepository.remove(character);
    }
}   