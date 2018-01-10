import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({length: 500 })
  name: string;

  @Column('mobile') mobile: string;

  @Column('email') email: string;
}