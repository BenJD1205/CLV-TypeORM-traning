import { Controller, Inject, Post, Body, BadRequestException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {RegisterUserDto, LoginUserDto} from '@nest-orm/shared/dto'
import {AuthCMD} from '@nest-orm/shared/command'
import { catchError } from 'rxjs';

@Controller({version:'1',path:'auth'})
export class AuthController {
    constructor(
        @Inject('USER_MICROSERVICE') private readonly userService: ClientProxy
    ){}

    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto):Promise<any>{
        return this.userService.send({
            cmd:AuthCMD.REGISTER,
        },registerUserDto).pipe(catchError((err) => {
            throw new BadRequestException(err);
        }))
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto):Promise<any>{
        return this.userService.send({
            cmd: AuthCMD.LOGIN,
        }, loginUserDto).pipe(catchError((err) => {
            throw new BadRequestException(err);
        }))
    }
}
