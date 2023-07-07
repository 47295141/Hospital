import {Controller, Get, Post,Body, Put, Param, Delete,} from '@nestjs/common'
import {UserService} from './user_service'
import { CreateUser, UpdateUser } from 'src/interface/users_interface';
@Controller('user')
export class UserController{
    constructor (private readonly userService:UserService){}
@Get()
getUser(){
    return this.userService.finMany();
}
@Get(':id')
getId(@Param('id') id:string){
    return this.userService.getUserById(String(id));
}
@Post()
addUser(@Body() user:CreateUser){
    return this.userService.post(user);
}
@Put(':id')
updateUser(@Param('id') id: string, @Body() updateUser: UpdateUser){
    return this.userService.updateUser('id', updateUser)
}
@Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(String(id));
  }
}