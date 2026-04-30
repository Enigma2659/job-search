import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Firstname: string;

  @Column()
  Lname: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  DoB: Date;

  @Column()
  password: string;

  @Column({ nullable: true })
  role: string; // e.g., 'user', 'admin'
}