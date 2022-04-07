import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
    async fetchUsersList(): Promise<any> {
        try {
          const query = this.createQueryBuilder('user');
      
          const users = await query.getMany();

          return users;
        } catch (error) {
          console.log(error);
          throw new InternalServerErrorException();
        }
      }


      async createUser(name: string) : Promise<any>{
          try{

            const createUser = this.create({name: name})

            const user = await this.save(createUser);

            return user;

          }catch(ex){
              console.log(ex);
          }
      }

}
