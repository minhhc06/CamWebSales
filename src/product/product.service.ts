import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "./product.repository";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,


    ){}

    async getProducts(): Promise<any>{
        const products = await this.productRepository
        .fetchProductList()
        // const query = this.createQueryBuilder('user');
      
        // const users = await query.getMany();
        console.log(products);

        return {
            status: 200,
            data: products
        }

    }

}