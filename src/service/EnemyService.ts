import { AppDataSource } from '../config/DataSource';
import { BadRequestError, ConflictError, NotFound } from '../errors';
import { Enemy } from '../models/Enemy';
import { User } from '../models/User';

const enemyRepolsitory = AppDataSource.getRepository(Enemy);
const userRepository = AppDataSource.getMongoRepository(User);

export class EnemyService {




    async create(name: string, health: number, strength: number, agility: number, mana: number) {
        if (!name || !health || !strength || !agility || !mana) {
            throw new BadRequestError('You are so stupid, Dumb as');
        }

        let enemy = new Enemy();
        enemy.name = name
        enemy.health = health
        enemy.maxHealth = health
        enemy.strength = strength
        enemy.agility = agility
        enemy.mana = mana
        enemy.maxMana = mana

        await enemyRepolsitory.save(enemy)

        return enemy;
    }



    async delete(id: number) {
        const enemy = await enemyRepolsitory.findOneBy({ id });

        if (!enemy) {
            throw new NotFound('Enemy not found');
        }

        await enemyRepolsitory.remove(enemy);
    }
}