import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Product } from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    
    async fetchProductList(): Promise<any> {
        try {
          const query = this.createQueryBuilder('product');
      
          const products = await query.getMany();

          return products;
        } catch (error) {
          console.log(error);
          throw new InternalServerErrorException();
        }
      }
    }