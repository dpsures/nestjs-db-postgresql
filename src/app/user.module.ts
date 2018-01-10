import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './user/user.service';
import { User } from './user/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    components: [UsersService]
})
export class UsersModule {

    constructor() {
        console.log('user module get loaded');
    }
};