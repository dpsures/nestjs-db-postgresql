import { User } from './user.entity';
import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Component()
export class UsersService {

    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) {
        console.log('user service called');
    }

    async getAllUsers() : Promise<User[]>{
        console.log('get all users');
        return await this.userRepository.find();
    }
}