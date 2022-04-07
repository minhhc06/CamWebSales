import { Get, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}
    @Get()
    async getProducts() {
      const products = await this.productService.getProducts();
      return products;
    }



}