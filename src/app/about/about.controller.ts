import { Controller, Get } from '@nestjs/common';

@Controller()
export class AboutController {
    constructor(){}

    @Get('about') 
    aboutApplication() : string {
        return 'Nest Js application API with DB connectivity';
    }
}