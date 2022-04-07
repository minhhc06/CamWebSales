import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
    // [x: string]: any;
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,

        

        // @InjectRepository(User)
        // private productRepository: Repository<Product>,

    ){}

    async getUser(): Promise<any>{
        const users = await this.userRepository
        .fetchUsersList()
        // const query = this.createQueryBuilder('user');
      
        // const users = await query.getMany();
        console.log(users);

        return {
            status: 200,
            data: users
        }

    }


    async createUser(): Promise<any>{
        const user = this.userRepository.createUser('test');

    }

}