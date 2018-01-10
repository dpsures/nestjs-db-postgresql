import { UsersModule } from './user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutController } from './about/about.controller';
import { User } from './user/user.entity';

@Module({
    imports : [
        TypeOrmModule.forRoot(),
        UsersModule
    ],
    controllers : [
        AboutController
    ]
})
export class ApplicationModule {

    constructor() {
        console.log('main module got loaded');
    }
}