import { Get, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    async getUser() {
      const users = await this.userService.getUser();
      return users;
    }


    @Post()
    async createUser(){
        const user = await this.userService.createUser();
        return user;
    }

}