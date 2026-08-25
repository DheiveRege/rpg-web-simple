import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("character")
export class Character {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 100, nullable: false })
    name: string;
    @Column({ name: 'class', nullable: false })
    className: string;
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
    @Column()
    maxMana: number;

    @ManyToOne(() => User, user => user.character)
    user: User;
}


