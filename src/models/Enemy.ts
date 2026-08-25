import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("enemy")
export class Enemy {
    @Column({ length: 100, nullable: false })
    name: string;
    @Column()
    health: number;
    @Column()
    maxHealth: number;
    @Column()
    strength: number;
    @Column()
    agility: number;
    @Column()
    mana: number;

}


