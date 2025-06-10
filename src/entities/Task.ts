import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Person } from "./Person";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: false })
  isDone: boolean;

  @ManyToOne(() => Person, (person) => person.tasks)
  person: Person;
}
