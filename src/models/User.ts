import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, nullable: false })
  name: string;
  @Column({ length: 100, nullable: false, unique: true })
  email: string;
  @Column({ length: 255, nullable: false })
  password: string;

  @OneToMany(() => Character, character => character.user)
  character: Character;
}


