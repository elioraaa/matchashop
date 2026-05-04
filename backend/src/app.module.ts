import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchaModule } from './matcha/matcha.module';
import { MatchaProductEntity } from './matcha/entities/matcha-product.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'eliora123',
      database: 'food_delivery',
      entities: [MatchaProductEntity],
      synchronize: true,
    }),
    MatchaModule,
    AuthModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
