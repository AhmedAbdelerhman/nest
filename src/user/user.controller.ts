import { UserDto } from './dtos/user.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class UserController {

    @Post("/signup")
    createUser( @Body() body :UserDto){

        console.log(body);
    }
}
