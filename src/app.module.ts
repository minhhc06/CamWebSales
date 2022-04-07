import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
// import { config } from './orm.config'
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        });
      },
    }),
    ProductModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
