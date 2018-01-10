import { User } from './user.entity';
import { UsersService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {

    constructor(private readonly userService : UsersService){}

    @Get('users') 
    getAllUsers() : Promise<User[]> {
        return this.userService.getAllUsers();
    }
}